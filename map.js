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



const words = ["ground", "control", "to", "major", "tom"];
const numbers = [3,6,4,8,1];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}




const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t']);
assertArraysEqual(map(words, word => word[1]), ['r','o','o','a','o']);
assertArraysEqual(map(numbers, number => number++), [3,6,4,8,1]);
