const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", (line) => {
  input = line;
  rl.close();
});

function solution(input) {
  let [w, r] = input.split(" ").map(Number);
  let rm = w * (1 + r / 30);
  return Math.floor(rm);
}

rl.on("close", () => {
  console.log(solution(input));
});
