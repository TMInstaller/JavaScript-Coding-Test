function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i += 1) {
    answer.push(i * x);
  }
  return answer;
}
