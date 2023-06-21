let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let C = Number(input[0]);
for (let i = 1; i <= C; i++) {
  let students = Number(input[i].split(" ")[0]);
  let scores = [];
  for (let j = 1; j <= students; j++) {
    scores.push(Number(input[i].split(" ")[j]));
  }
  let avg = scores.reduce((a, b) => a + b) / students;
  let count = scores.filter((score) => score > avg).length;
  console.log(`${((count / students) * 100).toFixed(3)}%`);
}
