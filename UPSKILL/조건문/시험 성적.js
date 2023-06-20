let fs = require("fs");
let input = fs.readFileSync("/dev/stdin");
let line = input.toString().split("\n");

let score = Number(line[0]);
let r = [100, 90, 80, 70, 60];

if (score <= r[0] && score >= r[1]) {
  console.log("A");
} else if (score < r[1] && score >= r[2]) {
  console.log("B");
} else if (score < r[2] && score >= r[3]) {
  console.log("C");
} else if (score < r[3] && score >= r[4]) {
  console.log("D");
} else {
  console.log("F");
}
