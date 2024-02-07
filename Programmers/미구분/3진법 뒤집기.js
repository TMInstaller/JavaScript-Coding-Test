function solution(n) {
  let arr = [];

  // n -> 3진법
  // 3진법 reverse
  while (true) {
    if (n < 3) break;
    arr.push(n % 3);
    n = Math.floor(n / 3);
  }
  arr.push(n);

  // 10진법으로 표현
  return parseInt(arr.join(""), 3);
}
