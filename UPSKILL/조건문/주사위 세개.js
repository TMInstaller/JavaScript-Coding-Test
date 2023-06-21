let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b, c] = input[0].split(" ").map(Number);

function threeDice(first, second, third) {
  const maxNum = Math.max(first, second, third);
  if (first === second && second === third) {
    return 10000 + maxNum * 1000;
  } else if (first === second || second === third || first === third) {
    if (first === second) return 1000 + first * 100;
    else if (first === third) return 1000 + first * 100;
    else if (second === third) return 1000 + second * 100;
  } else if (first !== second && second !== third) {
    return maxNum * 100;
  }
}

console.log(threeDice(a, b, c));
