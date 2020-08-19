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
    console.log(`✅ Passed: The arrays are equal`);
  } else {
    console.log(`🛑 Failed: The arrays are NOT equal.`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 4, 3]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => should FAIL