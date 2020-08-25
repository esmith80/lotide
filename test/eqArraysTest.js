const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


describe("#eqArrays compares two arrays for an exact match", () => {
  it("should return false for [1, 2, 3], [1, 4, 3] ", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 4, 3]), false); // => should FAIL

  });

  it('should return true for ["1", "2", "3"], ["1", "2", "3"]', () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS

  });

  it("should return false for [1, 2, 3], [1, 2, '3']", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, '3']), false); // => should FAIL

  });

  it("should return false for [1, 2, 3], [1, 2, 3, 4]", () => {
assert.equal(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should FAIL

  });

  it("should return true for [1, 2, 3], [1, 2, 3]", () => {
assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
    
  });
});