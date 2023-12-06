/**
 * 주어진 숫자 배열에서 숫자들의 조합을 찾아, 그 조합들의 합이 주어진 대상 값(target)과 같은 경우를 모두 반환합니다.
 *
 * @param {number[]} candidates - 사용할 수 있는 숫자 배열.
 * @param {number} target - 숫자 조합들의 합이 되어야 하는 대상 값.
 * @return {number[][]} - 조건을 만족하는 모든 숫자 조합들의 배열.
 */
var combinationSum = function (candidates, target) {
  const output = []; // 현재 조합을 저장하는 배열
  const res = []; // 최종 결과를 저장하는 배열
  let sum = 0; // 현재 조합의 합

  // 도우미 함수 solve 호출
  solve(candidates, target, [...output], res, 0, 0);
  return res;
};

/**
 * 조합을 찾는 도우미 함수.
 *
 * @param {number[]} candidates - 사용할 수 있는 숫자 배열.
 * @param {number} target - 숫자 조합들의 합이 되어야 하는 대상 값.
 * @param {number[]} output - 현재까지의 조합.
 * @param {number[][]} res - 최종 결과를 저장하는 배열.
 * @param {number} start - 탐색을 시작할 인덱스.
 * @param {number} sum - 현재까지의 조합의 합.
 */
const solve = (candidates, target, output, res, start, sum) => {
  // 현재 조합의 합이 대상 값보다 큰 경우, 더 이상 진행하지 않음
  if (sum > target) {
    return;
  }
  // 현재 조합의 합이 대상 값과 같은 경우, 결과 배열에 현재 조합 추가
  if (sum === target) {
    res.push(output);
    return;
  }

  // candidates 배열의 각 숫자에 대해 반복
  for (let i = start; i < candidates.length; i++) {
    const num = candidates[i]; // 현재 숫자
    output.push(num); // 현재 조합에 숫자 추가
    sum += num; // 합 업데이트
    solve(candidates, target, [...output], res, i, sum); // 재귀 호출
    const poppedElement = output.pop(); // 마지막 숫자 제거
    sum -= poppedElement; // 합 업데이트
  }
};
