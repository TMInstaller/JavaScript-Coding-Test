let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let numbers = new Set();
for (let i = 0; i < 10; i++) {
  numbers.add(Number(input[i]) % 42);
}

console.log(numbers.size);
