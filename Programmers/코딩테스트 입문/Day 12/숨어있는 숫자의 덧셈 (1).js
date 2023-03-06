function solution(my_string) {
  let answer = 0;
  for (s of my_string) {
    if (s >= 0 && s <= 9) answer += parseInt(s);
  }
  return answer;
}
