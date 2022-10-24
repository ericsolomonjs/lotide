const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

