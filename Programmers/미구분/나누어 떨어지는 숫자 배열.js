function solution(arr, divisor) {
  let answer = [];
  for (const num of arr) {
    if (num % divisor === 0) answer.push(num);
  }
  if (!answer.length) return [-1];
  return answer.sort((a, b) => a - b);
}
