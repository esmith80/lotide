// index.js
const head                = require('./head');
const tail                = require('./tail');
const middle              = require('./middle');
const assertArraysEqual   = require('./assertArraysEqual');
const assertEqual         = require('./assertEqual');
const assertObjectsEqual  = require('./assertObjectsEqual');
const countOnly           = require('./countOnly');
const eqArrays            = require('./eqArrays');
const eqObjects           = require('./eqObjects');
const findKey             = require('./findKey');
const findKeyByValue      = require('./findKeyByValue');
const map                 = require('./map');
const takeUntil           = require('./takeUntil');
const without             = require('./without');

module.exports = {
  head:               head,
  tail:               tail,
  middle:             middle,
  assertArraysEqual:  assertArraysEqual,
  assertEqual:        assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  assertObjectsEqual: assertObjectsEqual,
  countOnly:          countOnly,
  eqArrays:           eqArrays,
  eqObjects:          eqObjects,
  findKey:            findKey,
  findKeyByValue:     findKeyByValue,
  map:                map,
  takeUntil:          takeUntil,
  without:            without
};