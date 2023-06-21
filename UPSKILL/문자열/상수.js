let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [A, B] = input[0].split(" ");

A = A.split("").reduce((a, b) => b + a);
B = B.split("").reduce((a, b) => b + a);

console.log(Math.max(A, B));
