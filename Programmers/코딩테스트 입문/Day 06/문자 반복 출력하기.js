const solution = (my_string, n) => {
  let answer = "";
  for (s of my_string) {
    answer += s.repeat(n);
  }
  return answer;
};
