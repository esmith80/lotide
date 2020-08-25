const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("should return one value directly in the middle of an array for an odd number of elements", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });

  it("should return two values that constitute the middle for an even number of elements", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]); 
  });

  it("should return an empty array for an array that has only 1 or 2 elements", () => {
    assert.deepEqual(middle([1,2]), []);
    assert.deepEqual(middle([1]), []);
  });
});
