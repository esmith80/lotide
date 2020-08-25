const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {

  describe("Test Case 1: Check the returned array elements for length and equality", () => {

    const result = tail(["Hello", "Lighthouse", "Labs"]);

    it("should return an array that is one shorter than was passed", () => {
      assert.strictEqual(result.length, 2); // ensure we get back two elements
    });

    it("first element at 0 index should be the passed array 1 index ", () => {
      assert.strictEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
    });

    it("last element at last index should be the same as array that was passed ", () => {
      assert.strictEqual(result[1], "Labs"); // ensure second element is "Labs"
    });
  });

  describe("Test Case 2: Check that the original array is not mutated", () => {

    const originalArr =  ["Hello", "Lighthouse", "Labs"];
    const result = tail(originalArr);

    it("original array should be the same length before and after the call to #tail", () => {
      assert.strictEqual(result.length, originalArr.length - 1); // ensure original array is same length
    });

    it("original array should contain same values as before function was passed it", () => {
      assert.strictEqual(originalArr[0], "Hello"); // ensure first element is "Lighthouse"
      assert.strictEqual(originalArr[1], "Lighthouse"); // ensure second element is "Lighthouse"
      assert.strictEqual(originalArr[2], "Labs"); // ensure third element is "Labs"
    });
  });

  describe("Test Case 3: An array with one element should return an empty array", () => {

    const oneElementArr =  tail(["Goodbye World"]);
    it("an array of one element yields an empty array for its tail", () => {
      assert.deepEqual(oneElementArr, []); // ensure returned array is empty
    });
  });

});