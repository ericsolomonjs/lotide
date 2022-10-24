const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;


describe('#middle', () => {
  it("returns [] for [1]", () => {
    assert.deepEqual([],middle([1]));
  })
  it("returns [] for [1,2]" , () => {
    assert.deepEqual([], middle([1, 2]) );
  })
  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual([2], middle([1,2,3]));
  })
  it('returns [3] for [1,2,3,4,5]', () => {
    assert.deepEqual([3],middle([1,2,3,4,5]));
  })
  it('returns [2,3] for [1,2,3,4]', () => {
    assert.deepEqual([2,3],middle([1,2,3,4]));
  })
  it('returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual([3, 4],middle([1, 2, 3, 4, 5, 6]));
  })
});
