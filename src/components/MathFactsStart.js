import React from 'react';
import SelectInput from './SelectInput';
import './Main.css';
import PlayNow from './PlayNow';

function MathFactsStart({operation, setOperation,
               maxNumber, setMaxNumber}) {
    const operations = [
      ['Addition', '+'],
      ['Subtraction', '-'],
      ['Multiplication', 'x'],
      ['Division', '/']
  ];
  
    const numbers = [];
    for (let number=2; number <= 100; number++) {
        numbers.push([number, number]);
    }
  return(
    <main>
     <h1>Math Facts</h1>
      <div className='row mx-1 my-3'>
      <SelectInput label="Operation"
        id="operation"
        currentValue={operation}
        setCurrentValue={setOperation}
        values={operations} />
      </div>
      <div className='row mx-1 my-3'>  
      <SelectInput label="Maximum Number"
        id="max-number"
        currentValue={maxNumber}
        setCurrentValue={setMaxNumber}
        values={numbers} />
      </div>
      <div className='row mx-1 my-3'>  
      <PlayNow label="Go"
            link="/game/mathfacts" />
      </div>
    </main>
  );
}

export default MathFactsStart;