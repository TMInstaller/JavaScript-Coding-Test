/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = nums.sort((a, b) => b - a);
  return (result[0] - 1) * (result[1] - 1);
};
