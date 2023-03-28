function solution(d, budget) {
  let answer = 0;
  let sum = 0;

  // 오름차순 정렬
  d = d.sort((a, b) => a - b);

  for (i = 0; i < d.length; i++) {
    sum += d[i];

    // 주어진 예산보다 합이 적을때까지만 합치기
    if (sum <= budget) {
      answer++;
    } else {
      break;
    }
  }
  return answer;
}
