const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head(['first','second','third']), 'first');
assertEqual(head([1, [3, 4, 5],'still third']), 1);
assertEqual(head([{key1 : 'value', key2 : 'value2'}, 'second']), '33');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 3);
assertEqual(head(['only item']), 'only item');