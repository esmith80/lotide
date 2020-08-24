const assertArraysEqual = require('../assertEqual');
const middle = require('../middle');

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