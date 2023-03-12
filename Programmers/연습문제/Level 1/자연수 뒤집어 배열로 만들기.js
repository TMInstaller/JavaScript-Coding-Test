function solution(n) {
  let answer = [];
  while (n >= 10) {
    answer = [...answer, n % 10];
    n = Math.floor(n / 10);
  }
  return [...answer, n];
}
