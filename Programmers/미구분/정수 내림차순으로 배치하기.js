function solution(n) {
  return Number(n.toString().split("").map(Number).sort().reverse().join(""));
}
