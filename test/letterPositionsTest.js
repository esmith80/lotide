const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

// print out and tests
let testString = "hello world";
console.table(letterPositions(testString));
assertArraysEqual(letterPositions(testString).e, [1]);
assertArraysEqual(letterPositions(testString).l, [2,3,9]);
assertArraysEqual(letterPositions(testString).o, [4,7]);