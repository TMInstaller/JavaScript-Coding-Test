/**
 * @param {string} s
 * @return {number}
 */
const selectLastWord = (words) => {
  for (let i = words.length - 1; i >= 0; i -= 1) {
    console.log(words[i]);
    if (words[i] !== "") {
      return words[i];
    }
  }
};

var lengthOfLastWord = function (s) {
  return selectLastWord(s.split(" ")).length;
};
