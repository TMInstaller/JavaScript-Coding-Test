let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 스스로의 풀이
let N = Number(input[0]);

let answer = 0;
while (N > 0) {
  if (N % 5 === 0) {
    answer += N / 5;
    break;
  } else {
    N -= 3;
    answer += 1;
  }
}

if (N < 0) console.log(-1);
else console.log(answer);

// 다른 풀이
/*
  let n = Number(input[0]);
  let cnt = 0;
  let flag = false;

  while (n >= 0) {
    if (n === 0 || n % 5 === 0) {
      cnt += parseInt(n / 5);
      console.log(cnt);
      flag = true;
      break;
    }
    n -= 3;
    cnt += 1;
  }

  if (!flag) console.log(-1);
*/
