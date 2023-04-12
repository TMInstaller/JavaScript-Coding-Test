function solution(nums) {
  // 소수인지 아닌지를 판별하는 함수
  function find(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) count++;
    }
    if (count === 2) {
      return true; // 소수인 경우 true 반환
    } else {
      return false; // 소수가 아닌 경우 false 반환
    }
  }

  let result = 0;
  // 배열에서 3개의 숫자를 선택하여 합이 소수인 경우를 찾음
  for (i = 0; i < nums.length - 2; i++) {
    for (j = i + 1; j < nums.length - 1; j++) {
      for (k = j + 1; k < nums.length; k++) {
        if (find(nums[i] + nums[j] + nums[k])) {
          result++; // 합이 소수인 경우 result 값 증가
        }
      }
    }
  }

  return result; // 결과값 반환
}
