/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue; // 중복된 값 건너뛰기
    }

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++; // 중복된 left 값 건너뛰기
        while (left < right && nums[right] === nums[right - 1]) right--; // 중복된 right 값 건너뛰기
        left++;
        right--;
      } else if (sum < 0) {
        left++; // sum이 0보다 작으면 left 증가
      } else {
        right--; // sum이 0보다 크면 right 감소
      }
    }
  }
  return result;
};
