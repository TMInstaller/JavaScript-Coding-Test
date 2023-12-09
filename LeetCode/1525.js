/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
  let count = 0;
  const leftCount = new Array(s.length).fill(0);
  const rightCount = new Array(s.length).fill(0);
  const charSet = new Set();

  for (let i = 0; i < s.length - 1; i += 1) {
    charSet.add(s[i]);
    leftCount[i] = charSet.size;
  }

  charSet.clear();

  for (let i = s.length - 1; i >= 0; i -= 1) {
    charSet.add(s[i]);
    rightCount[i] = charSet.size;
  }

  for (let i = 0; i < s.length; i += 1) {
    if (leftCount[i] === rightCount[i + 1]) {
      count += 1;
    }
  }

  return count;
};
