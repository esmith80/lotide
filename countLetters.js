const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(str) {
  //remove spaces as they are not necessary to count; make lower case as not to count capitals and lowercase as different values
  str = str.toLowerCase().split(" ").join("");

  const letterReport = {};
  for (let i = 0; i < str.length; i++) {
    if (letterReport[str.charAt(i)]) {
      letterReport[str.charAt(i)]++;
    } else {
      letterReport[str.charAt(i)] = 1;
    }
  }
  return letterReport;
};

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