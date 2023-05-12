function solution(n, k) {
  let answer = [];
  for (let i = k; i <= n; i += k) {
    answer = [...answer, i];
  }
  return answer;
}
