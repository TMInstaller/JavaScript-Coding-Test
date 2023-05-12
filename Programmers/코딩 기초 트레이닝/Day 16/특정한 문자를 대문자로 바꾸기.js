function solution(my_string, alp) {
  let answer = "";
  for (ms of my_string) {
    answer += ms === alp ? ms.toUpperCase() : ms;
  }
  return answer;
}
