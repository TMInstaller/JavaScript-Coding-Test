function solution(start, end) {
  let answer = [];
  for (let i = start; i >= end; i--) {
    answer = [...answer, i];
  }
  return answer;
}
