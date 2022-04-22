import React, {Fragment} from 'react';
var anagrams = require('../helpers/anagrams.json');

function AnagramsLeft({word, wordLength}) {
  const setWord = wordLength.filter(5)
  
  return (
    <>
      <div className="col-5">{word}</div>
      <div className="col-5">({anagrams} left)</div>
    </>
  )
}
export default AnagramsLeft;