/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  const difference = arr[1] - arr[0];
  for (let i = 1; i < arr.length - 1; i += 1) {
    if (arr[i + 1] - arr[i] !== difference) {
      return false;
    }
  }
  return true;
};
