function solution(n) {
  let answer = 0;
  let count = 0;
  for (i = 0; i <= n; i++) {
    count = 0;
    for (j = 0; j <= i; j++) {
      if (i % j === 0) {
        count += 1;
      }
    }
    if (count >= 3) answer += 1;
  }
  return answer;
}
