let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);
let numbers = input[1].split("").map(Number);

console.log(numbers.reduce((a, b) => a + b));
