function solution(x, n) {
  let answer = [];
  for (i = 1; i <= n; i++) {
    answer = [...answer, i * x];
  }
  return answer;
}
