let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let [caseLength, alphas] = input[i].split(" ");

  console.log(solution(Number(caseLength), alphas));
}

function solution(caseLength, alphas) {
  let answer = "";
  for (let i = 0; i < alphas.length; i++) {
    answer += alphas[i].repeat(caseLength);
  }
  return answer;
}
