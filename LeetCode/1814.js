/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  function rev(num) {
    const res = num.toString().split("").reverse().join("");
    return Number(res);
  }

  const mod = 1e9 + 7; // 대규모 숫자를 처리하기 위한 모듈러 연산
  let count = 0;
  const diffMap = new Map(); // 차이를 저장할 해시맵

  for (let num of nums) {
    let diff = num - rev(num);
    if (diffMap.has(diff)) {
      count = (count + diffMap.get(diff)) % mod; // 모듈러 연산으로 오버플로우 방지
      diffMap.set(diff, diffMap.get(diff) + 1);
    } else {
      diffMap.set(diff, 1);
    }
  }

  return count;
};
