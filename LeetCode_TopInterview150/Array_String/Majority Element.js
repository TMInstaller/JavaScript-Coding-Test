/**
 * 배열에서 과반수를 차지하는 요소를 찾는 함수.
 * @param {number[]} nums - 검사할 숫자 배열.
 * @return {number} 과반수를 차지하는 요소.
 */
var majorityElement = function (nums) {
  let candidate; // 현재 후보 요소
  let count = 0; // 후보 요소의 카운트

  // 배열의 모든 요소를 순회
  for (const num of nums) {
    // 카운트가 0이면 현재 요소를 새로운 후보로 지정
    if (count === 0) {
      candidate = num;
    }
    // 현재 요소가 후보와 같으면 카운트 증가, 아니면 감소
    count += num === candidate ? 1 : -1;
  }

  // 가장 많이 등장한 후보 반환
  return candidate;
};
