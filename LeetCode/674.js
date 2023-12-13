/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let output = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!count || nums[i] > nums[i - 1]) {
      count++;
    } else {
      output = Math.max(output, count);
      count = 1;
    }
  }

  return Math.max(output, count);
};
