function solution(my_string, letter) {
  let answer = "";
  for (s of my_string) {
    if (letter === s) {
      continue;
    } else {
      answer += s;
    }
  }
  return answer;
}
