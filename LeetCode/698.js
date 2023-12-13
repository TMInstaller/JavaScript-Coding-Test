/**
 * 숫자 배열을 k개의 부분집합으로 나눌 수 있는지 여부를 확인하는 함수.
 *
 * @param {number[]} nums - 나눌 숫자 배열.
 * @param {number} k - 부분집합의 개수.
 * @return {boolean} - 나눌 수 있으면 true, 아니면 false.
 */
var canPartitionKSubsets = function (nums, k) {
  // 배열의 총 합을 계산
  const total = nums.reduce((acc, cur) => acc + cur, 0);

  // 총 합이 k로 나누어 떨어지지 않으면 나눌 수 없음
  if (total % k != 0) return false;

  // 각 부분집합의 목표 합 계산
  const subset = total / k;
  // 메모이제이션을 위한 맵
  const memo = new Map();

  // 부분집합을 생성하는 재귀 함수
  function partition(idx, sum, count) {
    // k-1개의 부분집합이 목표 합에 도달했으면 나머지도 도달 가능
    if (count === k - 1) return true;

    // 현재 배열의 상태를 키로 사용
    const key = nums.join();
    if (memo.has(key)) return false;

    // 현재 부분집합의 합이 목표에 도달했으면 다음 부분집합 시작
    if (sum === subset) return partition(0, 0, count + 1);
    // 합이 목표를 초과하면 실패
    if (sum > subset) return false;

    // 현재 인덱스부터 배열의 끝까지 순회
    for (let i = idx; i < nums.length; i++) {
      if (nums[i] === null) continue; // 이미 사용한 숫자 스킵
      const num = nums[i];
      nums[i] = null; // 숫자 사용 표시
      if (partition(i + 1, sum + num, count)) return true; // 재귀 호출
      nums[i] = num; // 숫자 사용 취소
    }

    // 현재 상태에서는 나눌 수 없음
    memo.set(key, false);
    return false;
  }

  // 재귀 함수 시작
  return partition(0, 0, 0);
};
