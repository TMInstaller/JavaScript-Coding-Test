/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let pointerS = 0;
  let pointerT = 0;

  // 예외 먼저 처리
  if (s === "") {
    return true;
  }

  if (s.length > t.length) {
    return false;
  }

  while (pointerT < t.length) {
    if (t[pointerT] === s[pointerS]) {
      pointerS += 1;
    }
    if (pointerS === s.length) {
      return true;
    }
    pointerT += 1;
  }
  return false;
};
