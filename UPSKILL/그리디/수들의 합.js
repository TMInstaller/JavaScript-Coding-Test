let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);

let answer = 0;
let index = 1;
while (index <= N) {
  N -= index;
  index++;
  answer++;
}

console.log(answer);
