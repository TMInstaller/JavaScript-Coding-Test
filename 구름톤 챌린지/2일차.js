const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  console.log(solution(input));
});

function solution(input) {
  let N = parseInt(input[0]);
  let [T, M] = input[1].split(" ").map(Number);
  let time = 0;
  for (let i = 2; i < 2 + N; i++) {
    time += Number(input[i]);
  }
  M += time;
  while (M >= 60) {
    M -= 60;
    T++;
  }
  T = T % 24;

  return `${T} ${M}`;
}
