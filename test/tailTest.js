const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns true for tail([\"Hello\", \"Lighthouse\", \"Labs\"]) === [\"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(["Lighthouse", "Labs"], tail(["Hello", "Lighthouse", "Labs"]));
  })
});

