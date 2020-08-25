const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');

const qp = { q: [4,5], p: "2" };
const zy = { z: "2", y: "1" };
assertEqual(eqObjects(qp, zy), false); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2"] };
assertEqual(eqObjects(cd, cd2), false); // => false
