let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 스스로의 풀이
let [A, B] = input[0].split(" ").map(Number);

let count = 1;

while (A < B) {
  if (B % 10 === 1) {
    B = Math.floor(B / 10);
  } else if (B % 2 === 0) {
    B = B / 2;
  } else {
    break;
  }
  count++;
}

if (A === B) console.log(count);
else console.log(-1);

// 다른 풀이
/*
  let [a, b] = input[0].split(" ").map(Number);
  let flag = false;
  let result = 1;

  while (a <= b) {
    if (a === b) {
      flag = true;
      break;
    }
    if (b % 2 === 0) b = parseInt(b / 2);
    else if (b % 10 === 1) b = parseInt(b / 10);
    else break;
    result++;
  }

  if (flag) console.log(result);
  else console.log(-1);
*/
