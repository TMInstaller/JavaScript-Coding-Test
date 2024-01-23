let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let nums = [];
for (let i = 0; i < 9; i++) {
  nums.push(Number(input[i]));
}

console.log(Math.max(...nums));
console.log(nums.indexOf(Math.max(...nums)) + 1);
