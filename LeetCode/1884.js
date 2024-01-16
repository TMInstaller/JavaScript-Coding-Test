/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function (n) {
  let count = 1;
  let sum = 0;
  while (sum < n) {
    sum += count;
    count += 1;
  }
  return count - 1;
};
