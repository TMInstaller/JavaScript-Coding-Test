function solution(n) {
  let answer = [];
  let divisor = 2;
  while (n >= 2) {
    if (n % divisor === 0) {
      answer.push(divisor);
      n = Math.floor(n / divisor);
    } else divisor += 1;
  }
  return [...new Set(answer)];
}
