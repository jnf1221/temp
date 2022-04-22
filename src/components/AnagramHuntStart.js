import React from 'react';
import SelectInput from './SelectInput';
import './Main.css';
import PlayNow from './PlayNow';

function AnagramHuntStart({
  wordLength, setWordLength}) {

const numbers = [];
for (let number=5; number <= 8; number++) {
    numbers.push([number, number]);
}
  return(
    <main>
    <h1>Anagram Hunt</h1>
    <div className='row mx-1 my-3'>  
      <SelectInput label="WORD LENGTH"
        id="set-value"
        currentValue={wordLength}
        setCurrentValue={setWordLength}
        values={numbers} />
    </div>
    <div className='text-start'>
      1. Choose Word Length <br/>
      2. Press <b>Play!</b><br/>
      3. How many anagrams can you find in a minute?
    </div>
    <div className='row mx-1 my-3'>  
      <PlayNow label="Play!"
       link="/game/anagramhunt" />
    </div>
    </main>
  );
}

export default AnagramHuntStart;