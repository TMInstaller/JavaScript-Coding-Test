function solution(num_list) {
  let answer = 0;
  for (n of num_list) {
    while (n > 1) {
      n = n % 2 === 0 ? n / 2 : (n - 1) / 2;
      answer += 1;
    }
  }
  return answer;
}
