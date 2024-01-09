/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let differenceH = Math.min(height[right], height[left]);
    let differenceW = right - left;
    result = Math.max(result, differenceH * differenceW);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};
