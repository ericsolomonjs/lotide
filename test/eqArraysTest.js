const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(true,eqArrays([1, 2, 3], [1, 2, 3]));
  })
  it("returns false for eqArrays([1, 2, 3], [3, 2, 1])", () => {
    assert.strictEqual(false,eqArrays([1, 2, 3], [3, 2, 1]));
  })
  it("returns true for eqArrays([\"1\", \"2\", \"3\"], [\"1\", \"2\", \"3\"])", () => {
    assert.strictEqual(true,eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  })
  it("returns false for eqArrays([\"1\", \"2\", \"3\"], [\"1\", \"2\", 3])", () => {
    assert.strictEqual(false,eqArrays(["1", "2", "3"], ["1", "2", 3]));
  })
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(true,eqArrays([1, 2, 3], [1, 2, 3]));
  })
})
