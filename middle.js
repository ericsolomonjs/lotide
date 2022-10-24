const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function (array1) {
  if (array1.length < 3) {
    return [];
  } else if (array1.length % 2 !== 0) {
    return [array1[(parseInt(array1.length / 2))]]
  } else if (array1.length % 2 === 0) {
    return  [array1[(array1.length/2) - 1], array1[(array1.length / 2)]]
  }
};

module.exports = middle;