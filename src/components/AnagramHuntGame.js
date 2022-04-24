import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Score from "./Score";
import Timer from "./Timer";
import { randInt } from "../helpers/helper";
import Keyboard from "./Keyboard";
import './MathFactsGame.css'
// import AnagramsLeft from "./AnagramsLeft";
var anagrams = require('../helpers/anagrams.json');

function AnagramHuntGame({operation, wordLength}) {

  let randNums = getWords(wordLength);
  const [operands, setOperands] = useState(randNums);
  const question = "";

  const [userAnswer, setUserAnswer] = useState('');
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const gameLength = 60;
  const [timeLeft, setTimeLeft] = useState(gameLength);

  function appendToAnswer(num) {
    setUserAnswer(String(Number(userAnswer + num)));
  }

  function checkAnswer(userAnswer) {
    if (isNaN(userAnswer)) return false; // User hasn't answered
    
    let correctAnswer;
    switch(operation) {
      case '+':
        correctAnswer = operands.num1 + operands.num2;
        break;
      case '-':
        correctAnswer = operands.num1 - operands.num2;
        break;
      case 'x':
        correctAnswer = operands.num1 * operands.num2;
        break;
      default: // division
        correctAnswer = operands.num1 / operands.num2;
    };
    return (parseInt(userAnswer) === correctAnswer);
  }

  // if (!answered && checkAnswer(userAnswer)) {
  //   setAnswered(true);
  //   setScore(score + 1);
  //   setTimeout(newWord, 300);
  // }
  function newWord() {
  }

  function restart() {
    setTimeLeft(gameLength);
    setScore(0);
    newWord();
  }

  function getWords(){
    console.log(`${wordLength.toString()} ${typeof(wordLength.toString())}`);
    console.log(`${JSON.stringify(Object.keys(anagrams.wordLength))}`);
    console.log(`Object.values: ${Object.values(anagrams.wordLength[wordLength])}`);
    var temp = Object.keys(anagrams.wordLength).find(key => anagrams.wordLength[key] === wordLength.toString());
    console.log(`${JSON.stringify(temp)}`);
  }
  
  const equationClass = answered
  ? 'row my-2 text-primary fade'
  : 'row my-2 text-secondary';

  if (timeLeft === 0) {
    return (
      <div className="text-center" id="game-container">
        <h2>Time's Up!</h2>
        <strong style={{fontSize: "1.5em"}}>You Got</strong>
        <div style={{fontSize: "5em"}}>{score}</div>
        <strong style={{fontSize: "1.5em"}}>
          Anagrams
        </strong>
        <button className="btn btn-primary form-control m-1"
          onClick={restart}>
            Play Again
          </button>
          <Link className="btn btn-secondary form-control m-1" to="/">
            Back to Start Screen
          </Link>
      </div>
    )
  }

  return (
    <main className="text-center" id="game-container">
      <div><b>Anagram Hunt</b></div>
      <div className="row border-bottom" style={{fontSize: "1.5em"}}>
        <div className="col px-3 text-left">
          <Score score={score} />
        </div>
        <div className="col px-3 text-right">
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
        </div>
      </div>
        <div style={{fontSize: "2.5em"}}>
          
        </div>
      <Keyboard setUserAnswer={setUserAnswer} />
    </main>
    );
}

export default AnagramHuntGame;