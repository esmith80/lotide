const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns number 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns the string '5' for ['5', 'foo', 'bar']", () => {
    assert.strictEqual(head(['5', 'foo', 'bar']), '5'); 
  });

  it("should return one element for a single element array (e.g. [1] should return 1", () => {
    assert.deepEqual(head([1]), 1); 
  });

  it("An empty array should yield undefined as its head", () => {
    assert.deepEqual(head([]), undefined);
  });

});





/*
const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head(['first','second','third']), 'first');
assertEqual(head([1, [3, 4, 5],'still third']), 1);
assertEqual(head([{key1 : 'value', key2 : 'value2'}, 'second']), '33');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 3);
assertEqual(head(['only item']), 'only item');
*/