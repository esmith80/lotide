const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) return false;
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅ Passed: " + JSON.stringify(array1) + " is equal to " + JSON.stringify(array2));
  } else {
    console.log("🛑 Failed: " + JSON.stringify(array1) + " is NOT equal to " + JSON.stringify(array2));
  }
};

const letterPositions = function(str) {
  // return all indicies in the string where each character is found
  // convert to lowercase so captials/lowercase are counted twice;
  // problem asked not to count spaces as index points with a total BUT they do want to allow for them in the index placement of other letters
  str = str.toLowerCase();
  //place each letter as a key
  //--if the character is a space, do not set it as a key
  //--if the letter has not been found before, set it with its current index as the first value of an array
  //--else the letter has been found before, push the current index as a value in its array
  const letterPositionReport = {};
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === " ") continue;
    if (letterPositionReport[str.charAt(i)]) {
      letterPositionReport[str.charAt(i)].push(i);
    } else {
      letterPositionReport[str.charAt(i)] = [i];
    }
  }
  return letterPositionReport;
};
// print out and tests
let testString = "hello world";
console.table(letterPositions(testString));
assertArraysEqual(letterPositions(testString).e, [1]);
assertArraysEqual(letterPositions(testString).l, [2,3,9]);
assertArraysEqual(letterPositions(testString).o, [4,7]);