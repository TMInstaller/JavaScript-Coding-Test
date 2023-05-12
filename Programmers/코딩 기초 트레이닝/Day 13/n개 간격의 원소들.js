function solution(num_list, n) {
  let answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    answer = [...answer, num_list[i]];
  }
  return answer;
}
