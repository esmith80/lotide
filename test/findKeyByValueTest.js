const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue takes an object and a string; returns a key the string is  (exact match) in that object, undefined if not found", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("should return a key if an exact value contained in that object is input", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

  });

  it("should return undefined if the value input is not found in the object", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

  });
});



