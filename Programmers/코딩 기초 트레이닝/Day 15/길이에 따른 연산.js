function solution(num_list) {
  let answer = 0;
  if (num_list.length >= 11) {
    num_list.forEach((n) => {
      answer += n;
    });
  } else {
    answer = 1;
    num_list.forEach((n) => {
      answer *= n;
    });
  }
  return answer;
}
