/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanObject = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i += 1) {
    const cur = romanObject[s[i]];
    const next = romanObject[s[i + 1]];

    if (cur < next) {
      sum += next - cur;
      i += 1;
    } else {
      sum += cur;
    }
  }
  return sum;
};
