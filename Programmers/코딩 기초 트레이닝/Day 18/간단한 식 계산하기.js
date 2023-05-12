function solution(binomial) {
  let answer = 0;
  binomial = binomial.split(" ");
  if (binomial.includes("+")) {
    answer = parseInt(binomial[0]) + parseInt(binomial[2]);
  } else if (binomial.includes("-")) {
    answer = parseInt(binomial[0]) - parseInt(binomial[2]);
  } else {
    answer = parseInt(binomial[0]) * parseInt(binomial[2]);
  }
  return answer;
}
