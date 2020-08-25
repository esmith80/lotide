const findKeyByValue = function(obj, passedValue) {
  //compare each object values to the value passed
  for (let i = 0; i < Object.values(obj).length; i++) {
    if (passedValue === Object.values(obj)[i]) return Object.keys(obj)[i];
  }
};

module.exports = findKeyByValue;