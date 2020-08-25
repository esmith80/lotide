const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects compares two objects for an exact match, same keys, value (though not necessarily same order", () => {
  it("should return false if objects do not have same keys or value", () => {
    const qp = { q: [4,5], p: "2" };
    const zy = { z: "2", y: "1" };
    assert.equal(eqObjects(qp, zy), false); // => false
  });
  it("should return true if objects exact matches for all keys and values (properties out of order)", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.equal(eqObjects(ab, ba), true); // => true
  });
  it("should return false if one object is a subset of exact matches for keys and values (objects identical except one object has extra property) ", () => {
    const de = { d: "1", e: "2" };
    const def = { d: "1", e: "2", f: "3" };
    assert.equal(eqObjects(de, def), false); // => false
  });

  it("should successfully compare arrays within an object", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.equal(eqObjects(cd, dc), true); // => true
  });
});