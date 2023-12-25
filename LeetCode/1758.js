/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  const length = s.length;
  let dif1 = 0;
  let dif2 = 0;

  for (let i = 0; i < length; i += 1) {
    if (i % 2) {
      if (s[i] !== "0") dif1 += 1;
      if (s[i] !== "1") dif2 += 1;
    } else {
      if (s[i] !== "1") dif1 += 1;
      if (s[i] !== "0") dif2 += 1;
    }
  }

  return Math.min(dif1, dif2);
};
