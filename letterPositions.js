const letterPositions = function(str) {
  if (!str) return {error: "no valid input"}; 
  str = str.toLowerCase();
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