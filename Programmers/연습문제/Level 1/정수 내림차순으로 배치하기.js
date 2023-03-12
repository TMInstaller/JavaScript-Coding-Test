function solution(n) {
  let answer = 0;
  let str = String(n).split("").sort().reverse();
  for (s of str) {
    answer = answer * 10 + parseInt(s);
  }
  return answer;
}
