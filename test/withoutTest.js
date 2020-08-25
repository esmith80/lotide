const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

// TEST CASES

assertArraysEqual(without([2, 9, 9, 1, 9, 3, 4, 1], [1, 9, 1, "hey"]), [2,3,4]); // should PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // should PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), [1, "2"]); // should FAIL
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2", 0]); // should FAIL
assertArraysEqual(without(["hey", "2", "3"], [2, "hey", "3"]), ["2"]); // should PASS

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);