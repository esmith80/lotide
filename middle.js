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

// middle function takes one array as argument and returns middle element(s)
const middle = function(arr) {
  if (arr.length <= 2) return [];
  let m = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return [arr[m - 1], arr[m]];
  } else {
    return [arr[m]];
  }
};

// PASS TESTS
assertArraysEqual(middle([1,2,3]), [2]); //should PASS
assertArraysEqual(middle([1,2,3,4]), [2,3]); //should PASS
assertArraysEqual(middle([1,2]), []); //should PASS
assertArraysEqual(middle([1]), []); //should PASS
//FAIL TESTS
assertArraysEqual(middle([1,2,3]), [1,2]); //should FAIL
assertArraysEqual(middle([1,2,3,4]), [1,2,3]); //should FAIL
assertArraysEqual(middle([1,2]), [2]); //should FAIL
assertArraysEqual(middle([1]), [1]); //should FAIL


