let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, K] = input[0].split(" ").map(Number);

let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(arr[K - 1]);
