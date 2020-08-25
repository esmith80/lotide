const assertEqual = require('./assertEqual');

const findKey = function(obj, callback) {
  for (const key of Object.keys(obj)) {
    if (callback(obj[key])) return key;
  }
};

module.exports = assertEqual;