function solution(a, b) {
  let answer = 0;
  let eoA = a % 2;
  let eoB = b % 2;
  if (eoA && eoB) {
    answer = a ** 2 + b ** 2;
  } else if (eoA || eoB) {
    answer = 2 * (a + b);
  } else {
    answer = Math.abs(a - b);
  }
  return answer;
}
