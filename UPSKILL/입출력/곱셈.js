let fs = require("fs");
let input = fs.readFileSync("/dev/stdin");
let line = input.toString().split("\n");

let a = line[0];
let b = line[1];

x_1 = b[2]; // 1의 자리
x_2 = b[1]; // 10의 자리
x_3 = b[0]; // 100의 자리

console.log(Number(a) * Number(x_1));
console.log(Number(a) * Number(x_2));
console.log(Number(a) * Number(x_3));
console.log(Number(a) * Number(b));
