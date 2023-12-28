/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      // 현재 인덱스가 도달 가능한 최대 인덱스를 넘어섰다면 점프 불가
      return false;
    }
    maxReach = Math.max(maxReach, i + nums[i]); // 최대 도달 가능 인덱스 업데이트
    if (maxReach >= nums.length - 1) {
      // 배열의 끝에 도달했거나 넘어섰다면 점프 가능
      return true;
    }
  }

  return maxReach >= nums.length - 1;
};
