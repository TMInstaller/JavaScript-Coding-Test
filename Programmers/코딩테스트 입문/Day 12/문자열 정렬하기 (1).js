function solution(my_string) {
  var answer = [];
  for (s of my_string) if (s >= 0 && s <= 9) answer.push(parseInt(s));
  return answer.sort((a, b) => a - b);
}
