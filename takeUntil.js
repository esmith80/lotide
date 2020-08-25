const takeUntil = function(array, callback) {
  const slicedArr = [];
  for (let item of array) {
    if (!callback(item)) {
      slicedArr.push(item);
    } else {
      return slicedArr;
    }
  }
};

module.exports = takeUntil;