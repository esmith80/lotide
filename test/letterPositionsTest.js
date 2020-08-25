const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions returns an object that tracks number of occurences of a letter in a string", () => {
  let testString = "hello world";

  it("string appears once, that string's count in the object tracker should be 1", () => {
    assert.deepEqual(letterPositions(testString).l, [2,3,9]);
  });

  it("string apears twice, that string's count in the object tracker should be 2", () => {
    assert.deepEqual(letterPositions(testString).e, [1]);
  });

  it("string is not in list, that string is not listed in the tracker object and reference to it returns undefined", () => {
    assert.deepEqual(letterPositions(testString).o, [4,7]);
  });

  it("should return object with a single property of 'error' and a message if empty string or other non valid input is given", () => {
    assert.deepEqual(letterPositions("").error, "no valid input");
  });

});