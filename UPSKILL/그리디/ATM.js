let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);

let times = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let count = 0;
let sum = 0;
for (let i = 0; i < times.length; i++) {
  count += times[i];
  sum += count;
}

console.log(sum);
