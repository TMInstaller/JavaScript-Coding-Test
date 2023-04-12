function solution(numbers) {
  let result = [];

  // 배열에서 두 개의 숫자를 선택하여 더한 값의 모든 경우를 배열 result에 추가함
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result = [...result, numbers[i] + numbers[j]];
    }
  }

  // 배열 result를 Set으로 변환하여 중복 값을 제거함
  result = new Set(result);

  // Set을 다시 배열로 변환한 후, 숫자를 오름차순으로 정렬함
  return [...result].sort((a, b) => a - b);
}
