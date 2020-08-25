const countLetters = function(str) {
  //remove spaces as they are not necessary to count; make lower case as not to count capitals and lowercase as different values
  str = str.toLowerCase().split(" ").join("");
  const letterReport = {};
  for (let i = 0; i < str.length; i++) {
    if (letterReport[str.charAt(i)]) {
      letterReport[str.charAt(i)]++;
    } else {
      letterReport[str.charAt(i)] = 1;
    }
  }
  return letterReport;
};

module.exports = countLetters;