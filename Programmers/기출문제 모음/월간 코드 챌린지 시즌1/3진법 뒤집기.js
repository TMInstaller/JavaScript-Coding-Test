function solution(n) {
  let ans = n.toString(3).split("").reverse().join("");
  return parseInt(ans, 3);
}
