function solution(strlist) {
  var answer = [];
  for (s of strlist) {
    answer = [...answer, s.length];
  }
  return answer;
}
