let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);
let loadLength = input[1].split(" ").map(Number);
let price = input[2].split(" ").map(Number);

let minCost = price[0];
for (let i = 0; i < N; i++) {
  minCost = Math.min(minCost, price[i]);
  price[i] = minCost;
}

let answer = BigInt(0);
for (let i = 0; i < N - 1; i++) {
  answer += BigInt(loadLength[i]) * BigInt(price[i]);
}

console.log(String(answer));
