const letterPositions = function(str) {
  // return all indicies in the string where each character is found
  // convert to lowercase so captials/lowercase are counted twice;
  // problem asked not to count spaces as index points with a total BUT they do want to allow for them in the index placement of other letters
  str = str.toLowerCase();
  //place each letter as a key
  //--if the character is a space, do not set it as a key
  //--if the letter has not been found before, set it with its current index as the first value of an array
  //--else the letter has been found before, push the current index as a value in its array
  const letterPositionReport = {};
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === " ") continue;
    if (letterPositionReport[str.charAt(i)]) {
      letterPositionReport[str.charAt(i)].push(i);
    } else {
      letterPositionReport[str.charAt(i)] = [i];
    }
  }
  return letterPositionReport;
};

module.exports = letterPositions;