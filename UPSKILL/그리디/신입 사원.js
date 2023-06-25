let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let T = Number(input[0]);

let startN = 1;
let answer = "";
for (let i = 1; i <= T; i++) {
  let N = Number(input[startN]);
  startN++;
  let scores = [];
  for (let j = startN; j < startN + N; j++) {
    scores.push(input[j].split(" ").map(Number));
  }
  startN += N;
  answer += `${solution(scores)}\n`;
}

function solution(scores) {
  let result = 1;

  scores.sort((a, b) => a[0] - b[0]);

  let maxRank = scores[0][1];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i][1] < maxRank) {
      maxRank = scores[i][1];
      result++;
    }
  }

  return result;
}

console.log(answer);
