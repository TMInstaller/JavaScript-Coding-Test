const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
});

function solution(input) {
  let t = Number(input[0]);
  let answer = 0;

  for (let i = 1; i < 1 + t; i++) {
    let [a, symbol, b] = input[i].split(" ");
    if (symbol === "+") {
      answer += Number(a) + Number(b);
    } else if (symbol === "-") {
      answer += Number(a) - Number(b);
    } else if (symbol === "*") {
      answer += Number(a) * Number(b);
    } else if (symbol === "/") {
      answer += Math.floor(Number(a) / Number(b));
    }
  }

  return answer;
}

rl.on("close", () => {
  console.log(solution(input));
});
