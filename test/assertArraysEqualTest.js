const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 4, 3]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => should FAIL