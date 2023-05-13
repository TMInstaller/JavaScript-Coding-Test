function solution(n) {
  let answer = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  for (let i = 0; i < answer.length; i++) {
    answer[i][i] = 1;
  }
  return answer;
}
