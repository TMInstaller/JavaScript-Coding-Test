let fs = require("fs");
let input = fs.readFileSync("/dev/stdin");
let line = input.toString().split(" ");

let a = parseInt(line[0]);
let b = parseInt(line[1]);

console.log(a * b);
