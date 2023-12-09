/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  const sentenceArr = sentence.split(" ");
  for (let i = 0; i < sentenceArr.length; i += 1) {
    if (sentenceArr[i].slice(0, searchWord.length) === searchWord) {
      return i + 1;
    }
  }
  return -1;
};
