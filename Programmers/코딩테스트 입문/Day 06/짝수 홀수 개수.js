const solution = (num_list) => {
  let answer = [0, 0];
  for (num of num_list) {
    if (num % 2 === 0) {
      answer[0] += 1;
    } else {
      answer[1] += 1;
    }
  }
  return answer;
};
