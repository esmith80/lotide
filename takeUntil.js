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

const takeUntil = function(array, callback) {
  const slicedArr = [];
  for (let item of array) {
    if (!callback(item)) {
      slicedArr.push(item);
    } else {
      return slicedArr;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);