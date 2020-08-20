const eqArrays = function(array1, array2) {
  //console.log(array1, array2);
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) return false;
    }
  } else {
    return false;
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // requirement is they have the same number of keys and key-value pairs are the same (order doesn't matter)
  
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (let key of keys1) {
    const item1 = object1[key]; // remember this is accessing the notation... object[key] => key resolves to the property/key
    const item2 = object2[key];
    
    if (Array.isArray(item1) && Array.isArray(item2)) {
      if (!(eqArrays(item1, item2))) return false;
    }

    if ((item1 !== item2) && !(Array.isArray(item1) && Array.isArray(item2))) return false;

  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅ Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CASE
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });

