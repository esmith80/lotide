// middle function takes one array as argument and returns middle element(s)
const middle = function(arr) {
  if (arr.length <= 2) return [];
  let m = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return [arr[m - 1], arr[m]];
  } else {
    return [arr[m]];
  }
};

module.exports = middle;

