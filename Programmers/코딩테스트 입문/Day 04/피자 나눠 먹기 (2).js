function solution(n) {
  let answer = 0;
  // 6과 n의 최소공배수 구하기
  for (i = Math.max(n, 6); i <= n * 6; i++) {
    if (i % n === 0 && i % 6 === 0) {
      answer = i / 6;
      break;
    }
  }
  return answer;
}
