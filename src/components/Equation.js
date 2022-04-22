import React, {Fragment} from 'react';

function Equation({question, answer}) {

  return (
    <>
      <div className="col-5">{question}</div>
      <div className="col-2">=</div>
      <div className="col-5">{answer}</div>
    </>
  )
}
export default Equation;