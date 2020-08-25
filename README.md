# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @esmith80/lotide`

**Require it:**

`const _ = require('@esmith80/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:




* `assertArraysEqual(array1, array2)`: description

* `assertEqual(actual, expected)`: description

* `assertObjectsEqual(actual, expected)`: description

* `countLetters(str)`: description

* `countOnly(allItems, itemsToCount)`: takes in 2 arguments: 1) an array `allItems` (strings only) and 2) an object `itemsToCount` which tracks counts for a specific subset of those items (object format is key:value pair where key is string to search for and value is true

* `eqArrays(array1, array2)`: description
* `eqObjects(obj1, obj2)`: description
* `findKey()`: description

* `findKeyByValue(obj, string)`: takes 1) object and 2) string - returns a key if the string is found (exact match) in that object, undefined if not found

* `head(array)`: description

* `letterPositions(string)`: takes in 1 argument `string` and returns an object with counts for the occurence of each letter in that string

* `map()`: description
* `middle()`: description
* `tail()`: description
* `takeUntil()`: description
* `without()`: description










