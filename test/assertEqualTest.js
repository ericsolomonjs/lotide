const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns false for \"Lighthouse Labs\" === \"Bootcamp\"", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  }) 
});


// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);