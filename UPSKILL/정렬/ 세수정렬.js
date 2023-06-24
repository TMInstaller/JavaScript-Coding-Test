let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let sortedNumbers = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(`${sortedNumbers[0]} ${sortedNumbers[1]} ${sortedNumbers[2]}`);
