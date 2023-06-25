let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let T = Number(input[0]);
let result = "";

for (let i = 1; i <= T; i++) {
  let n = Number(input[i]);
  result += `${solution(n)}\n`;
}

function solution(n) {
  let fibo = [0, 1];
  let idx = 2;
  while (true) {
    let val = fibo[idx - 1] + fibo[idx - 2];
    if (val > n) break;
    fibo.push(val);
    idx++;
  }

  let answer = [];
  for (let i = fibo.length - 1; i >= 1; i--) {
    if (fibo[i] <= n) {
      n -= fibo[i];
      answer.push(fibo[i]);
    }
  }

  return answer.reverse().join(" ");
}

console.log(result);
