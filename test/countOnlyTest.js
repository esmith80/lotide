const countOnly = require('../countOnly');
const assert = require('chai').assert;

// names to check through

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });


describe("#countOnly returns an object that tracks number of occurences of a string in an array", () => {
  it("string appears once, that string's count in the object tracker should be 1", () => {
    assert.strictEqual(result["Jason"], 1);
  });

  it("string apears twice, that string's count in the object tracker should be 2", () => {
    assert.strictEqual(result["Fang"], 2);
  });

  it("string is not in list, that string is not listed in the tracker object and reference to it returns undefined", () => {
    assert.strictEqual(result["Karima"], undefined);
  });

});