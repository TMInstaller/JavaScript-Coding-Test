/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let index = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[index] === t[i]) {
      index += 1;
    }
  }
  if (index !== s.length) {
    return false;
  }
  return true;
};
