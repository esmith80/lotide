const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;