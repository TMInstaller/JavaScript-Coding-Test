function solution(n) {
  let answer = 0;
  let num = String(n).split("");
  for (i of num) {
    answer += parseInt(i);
  }
  return answer;
}
