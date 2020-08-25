const assertObjectsEqual = require('../assertObjectsEqual');

// TEST CASE
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
