/**
 * Two Pointers 알고리즘은 배열에서 두 개의 포인터를 사용하여 문제를 효율적으로 해결하는 방법입니다.
 * 그리고 그 중 대표적인 예시는 배열에서 두 수의 합이 특정 값(target)과 같은 쌍을 찾는 함수이죠.
 * @param {number[]} nums - 정렬되어있는 정수 배열
 * @param {number} target - 찾고자 하는 두 수의 합
 * @param {number[]} - 합이 target과 같은 두 수의 인덱스를 포함하는 배열
 */

const twoSum = (nums, target) => {
  // 시작 지점 포인터
  let left = 0;
  // 끝 지점 포인터(nums의 최대 index)
  let right = nums.length - 1;

  // 모든 곳에 대한 두 개의 조합을 볼 때까지 반복
  while (left < right) {
    let sum = nums[left] + nums[right];

    // else if, else 쪽에 어떤 기준으로 포인터를 증가/감소시킬까?
    // -> 여기서는 배열이 정렬되어있고, 중복값이 없다는 전제하에 진행된 코드이다.
    if (sum === target) {
      // 조건을 만족시켰을 때 return
      return [left, right];
    } else if (sum < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  // 조건을 만족하는 값을 찾지 못했을 때 return
  return [-1, -1];
};

// 예제 케이스
console.log(twoSum([1, 2, 3, 4, 5], 9)); // [3,4]
