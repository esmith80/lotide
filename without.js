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


// Implement without which will return a subset of a given array, removing unwanted elements.
const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

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
