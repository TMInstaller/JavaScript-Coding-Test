function solution(str_list, ex) {
  let answer = "";
  for (str of str_list) {
    answer += !str.includes(ex) ? str : "";
  }
  return answer;
}
