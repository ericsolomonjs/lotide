const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3],[1,2,3]); // > pass

assertArraysEqual(['a','b','c'],['a','b','d']); //should fail

