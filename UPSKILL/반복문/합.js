let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let sum = (n * (n + 1)) / 2;

console.log(sum);
