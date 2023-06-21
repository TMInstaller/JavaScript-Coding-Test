let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
let scores = input[1].split(" ").map(Number);

function solution(scores) {
  let maxNum = Math.max(...scores);
  for (let i = 0; i < scores.length; i++) {
    scores[i] = (scores[i] / maxNum) * 100;
  }
  let answer = scores.reduce((a, b) => a + b) / scores.length;

  return answer;
}

console.log(solution(scores));
