const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed : ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let resultObj = {};

  for (let i = 0; i < string.length; i++ ) {
    if (string[i] !== ' ') {
      if (resultObj[string[i]]) {
        resultObj[string[i]] += 1;
      } else {
        resultObj[string[i]] = 1;
      }
    }
  }

  return resultObj;
};

console.log(countLetters("lighthouse in the house"));