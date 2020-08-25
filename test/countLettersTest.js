const countLetters = require('../countLetters');

//test cases
let testString = "lighthouse in the house";
console.log(testString);
console.table(countLetters(testString));

testString = "the quick brown FOX jumps over the lazy dog";
console.log(testString);
console.table(countLetters(testString));

testString = "EdWardSM        ith       ";
console.log(testString);
console.table(countLetters(testString));

testString = "jessica burylo";
console.log(testString);
console.table(countLetters(testString));