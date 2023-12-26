/**
 * 두 정렬된 배열을 현장에서 합치는 함수.
 * @param {number[]} nums1 - 첫 번째 정렬된 배열, 크기는 m + n이며, 처음 m개 요소가 사용됨.
 * @param {number} m - nums1에서 사용되는 요소의 수
 * @param {number[]} nums2 - 두 번째 정렬된 배열, 크기는 n
 * @param {number} n - nums2의 요소 수
 * @return {void} 아무것도 반환하지 않고, nums1을 현장에서 수정함.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // nums1에서 현재 검사할 요소의 인덱스
  let j = n - 1; // nums2에서 현재 검사할 요소의 인덱스
  let k = m + n - 1; // nums1에서 새로운 요소를 삽입할 위치의 인덱스

  // nums2의 모든 요소를 순회할 때까지 반복
  while (j >= 0) {
    // nums1의 현재 요소가 nums2의 현재 요소보다 크면 nums1의 요소를 뒤로 이동
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      // 그렇지 않으면 nums2의 요소를 nums1에 삽입
      nums1[k--] = nums2[j--];
    }
  }
};
