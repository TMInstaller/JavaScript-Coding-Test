function solution(num_str) {
  let answer = 0;
  num_str.split("").forEach((n) => (answer += parseInt(n)));
  return answer;
}
