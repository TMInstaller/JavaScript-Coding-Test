function solution(numbers) {
  let answer = numbers.sort((a, b) => a - b);
  return Math.max(
    answer[0] * answer[1],
    answer[answer.length - 1] * answer[answer.length - 2]
  );
}
