/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
  if (!nums.length) return [];
  let result = [];
  let arr = [nums[0]];
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] - nums[i - 1] === 1) {
      arr.push(nums[i]);
    } else {
      result.push(arr);
      arr = [nums[i]];
    }
  }
  result.push(arr);

  return formatRanges(result);
};

function formatRanges(arr) {
  let result = [];

  for (let subArray of arr) {
    // 하위 배열의 길이가 1이면, 단일 숫자를 문자열로 추가
    if (subArray.length === 1) {
      result.push(`${subArray[0]}`);
    } else {
      // 하위 배열의 첫 번째와 마지막 숫자로 범위 문자열을 생성
      result.push(`${subArray[0]}->${subArray[subArray.length - 1]}`);
    }
  }

  return result;
}
