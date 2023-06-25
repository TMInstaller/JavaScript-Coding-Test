let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);
let times = [];
for (let i = 1; i <= N; i++) {
  times.push(input[i].split(" ").map(Number));
}

function solution(N, times) {
  times.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let answer = 0;
  let endTime = 0;

  for (let i = 0; i < N; i++) {
    if (endTime <= times[i][0]) {
      endTime = times[i][1];
      answer++;
    }
  }

  return answer;
}

console.log(solution(N, times));
