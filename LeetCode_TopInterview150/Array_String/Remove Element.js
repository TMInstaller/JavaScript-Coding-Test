/**
 * 주어진 배열에서 특정 값을 제거하는 함수.
 * @param {number[]} nums - 처리할 배열.
 * @param {number} val - 제거할 값.
 * @return {number} 배열에서 val과 일치하지 않는 요소의 새로운 길이.
 */
var removeElement = function (nums, val) {
  let i = 0; // nums 배열에서 val과 일치하지 않는 요소를 삽입할 인덱스

  // nums 배열의 모든 요소를 순회
  for (let n of nums) {
    // 현재 요소가 val과 일치하지 않으면
    if (n !== val) {
      nums[i++] = n; // 그 요소를 nums 배열의 i번째 위치에 삽입하고 i를 증가
    }
  }
  return i; // val과 일치하지 않는 요소의 총 개수 반환
};
