let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
let numbers = [];

for (let i = 1; i <= N; i++) {
  numbers.push(input[i]);
}

numbers.sort((a, b) => a - b);

let answer = "";
for (let i = 0; i < N; i++) {
  answer += numbers[i] + "\n";
}
console.log(answer);
