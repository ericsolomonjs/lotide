const eqArrays = require("./eqArrays");


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion passed: ${array1} === ${array2}`)
    return true;
  } else {
    console.log(`Assertion failed: ${array1} !== ${array2}`)
    return false;
  }
}

module.exports = assertArraysEqual;