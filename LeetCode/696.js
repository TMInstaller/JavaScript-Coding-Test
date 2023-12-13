/**
 * @param {string} s
 * @return {number}
 */
function countBinarySubstrings(s) {
  let [res, prev, cur] = [0, 0, 1];

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] !== s[i]) {
      res += Math.min(prev, cur);
      prev = cur;
      cur = 1;
    } else {
      cur += 1;
    }
  }

  return res + Math.min(prev, cur);
}
