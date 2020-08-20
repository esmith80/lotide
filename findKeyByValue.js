const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
   } else {
     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
   }
};

const findKeyByValue = function(obj, passedValue) {
  //compare each object values to the value passed
  for (let i = 0; i < Object.values(obj).length; i++) {
    if (passedValue === Object.values(obj)[i]) return Object.keys(obj)[i];
  }
};

// TEST
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
