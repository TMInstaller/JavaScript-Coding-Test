let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let maxNum = Number(input[0]);
let count = 1;
for (let i = 1; i < 9; i++) {
  if (maxNum < Number(input[i])) {
    maxNum = Number(input[i]);
    count = i + 1;
  }
}

console.log(maxNum);
console.log(count);
