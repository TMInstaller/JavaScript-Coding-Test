/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
const arrayStringsAreEqual = function (word1, word2) {
  const firstWorld = word1.join("");
  const secondWorld = word2.join("");
  return firstWorld === secondWorld;
};
