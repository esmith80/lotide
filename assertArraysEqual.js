const assertArraysEqual = function(array1, array2) {
  let arraysAreEqual = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`🛑 Failed: The arrays are NOT equal.`);
        arraysAreEqual = false;
        break;
      }
    }
  } else {
    console.log(`🛑 Failed: The arrays are NOT equal.`);
    arraysAreEqual = false;
  }
  if(arraysAreEqual) console.log(`✅ Passed: The arrays are equal`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 4, 3]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => should FAIL