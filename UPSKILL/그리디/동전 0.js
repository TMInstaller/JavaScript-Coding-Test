let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, K] = input[0].split(" ").map(Number);

let coins = [];
for (let i = 1; i <= N; i++) {
  coins.push(Number(input[i]));
}

coins.sort((a, b) => b - a);

let count = 0;
for (let c of coins) {
  if (c > K) {
    continue;
  }
  count += parseInt(K / c);
  K = K % c;
  if (K === 0) break;
}

console.log(count);
