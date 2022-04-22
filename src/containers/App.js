import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import Header from '../components/Header';
import Play2Learn from './Play2Learn';
import AnagramHunt from './AnagramHunt';
import MathFacts from './MathFacts';
import AnagramHuntStart from '../components/AnagramHuntStart';
import MathFactsStart from '../components/MathFactsStart';
import AnagramHuntGame from '../components/AnagramHuntGame';
import MathFactsGame from '../components/MathFactsGame';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [operation, setOperation] = useState('x');
  const [maxNumber, setMaxNumber] = useState(10);
  const [wordLength, setWordLength] = useState(5);
  return (
    <div className="App">
      <Header />
    <Route exact path="/"
        component={()=>
        <Play2Learn />} />
    <Route exact path="/anagramhunt"
        component={()=>
        <AnagramHunt />} />
    <Route exact path="/mathfacts"
        component={()=>
        <MathFacts />} />
    <Route exact path="/start/anagramhunt"
        component={()=>
        <AnagramHuntStart wordLength={wordLength}
        setWordLength={setWordLength} />} />
    <Route exact path="/start/mathfacts"
        component={()=>
        <MathFactsStart operation={operation}
          setOperation={setOperation}
          maxNumber={maxNumber}
          setMaxNumber={setMaxNumber} />} />
    <Route exact path="/game/anagramhunt"
        component={()=>
        <AnagramHuntGame />} />
    <Route path="/game/mathfacts"
        component={()=>
        <MathFactsGame operation={operation}
          maxNumber={maxNumber} />} />
    </div>
  );
}

export default App;
