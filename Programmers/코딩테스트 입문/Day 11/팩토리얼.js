function factorial(num) {
  if (num === 0) return 1;
  return Math.round(num * factorial(num - 1));
}

function solution(n) {
  let num = 0;
  while (n >= factorial(num)) {
    num += 1;
  }
  return num - 1;
}
