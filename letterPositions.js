const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0 ; i < array1.length ; i++ ) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {return false;}
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion failed: ${array1} !== ${array2}`);
  }
}

const letterPositions = function(sentence) 
{
  let results = {};
  let posArray = [];
  let lclSentence = sentence;
  for (let i = 0 ; i < sentence.length ; i++) 
  {
    let currentChar = sentence[i];
    posArray.push(i);
    for (let ii = 0 ; ii < sentence.length ; ii++) {
      if ((currentChar !== ' ') && (ii !== i) && (sentence[ii] === sentence [i]))
      {
        posArray.push(ii);
      } 
    }
    
    lclSentence = lclSentence.replaceAll(currentChar,'');     
    results[currentChar] = posArray;
    posArray = [];
  }
  return results;
};

console.log (letterPositions("hello"));

assertArraysEqual(letterPositions("hello").l, [2,3]);
