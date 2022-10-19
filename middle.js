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

const middle = function (array1) {
  if (array1.length < 3) {
    return [];
  } else if (array1.length % 2 !== 0) {
    return [array1[(parseInt(array1.length / 2))]]
  } else if (array1.length % 2 === 0) {
    return  [array1[(array1.length/2) - 1], array1[(array1.length / 2)]]
  }
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), [] ); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3] ); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]) , [3, 4])// => [3, 4]