let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let oddNums = [];
for (let i = 0; i < 7; i++) {
  let num = Number(input[i]);
  if (!isNaN(num) && num % 2 === 1) oddNums.push(num);
}
if (oddNums.length === 0) {
  console.log(-1);
} else {
  console.log(oddNums.reduce((a, b) => a + b));
  console.log(Math.min(...oddNums));
}
