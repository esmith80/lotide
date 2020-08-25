const findKey = require('../findKey');
const assertEqual = require('../assertEqual');

const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const testValue = findKey(restaurants, x => x.stars === 2);
console.log(testValue);

assertEqual(findKey(restaurants, x => x.stars === 2), "noma");
assertEqual(findKey(restaurants, x => x.stars === 0), undefined);
assertEqual(findKey(restaurants, x => x.stars === 3), "Akaleri");