let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 스스로의 풀이
let sortedNumber = input[0].split("").sort().reverse().join("");

console.log(sortedNumber);

// 다른 풀이
/*
  let n = input[0];
  let cnt = Array(10).fill(0);

  for (let x of n) {
    cnt[Number(x)]++;
  }

  let answer = "";

  for (let i = 9; i >= 0; i--) {
    for (let j = 0; j < cnt[i]; j++) answer += `${i}`;
  }

  console.log(answer);
*/
