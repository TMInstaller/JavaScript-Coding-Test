let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, K] = input[0].split(" ").map(Number);

// 스스로의 풀이
// N개의 공을 K개의 바구니에 나눠 담아야 한다.
const solution = (N, K) => {
  let arr = Array(K).fill(0);

  for (let i = 1; i <= K; i++) {
    arr[i - 1] += i;
    N -= i;
  }

  if (N < 0) return -1;

  let idx = K - 1;
  while (N > 0) {
    arr[idx] += 1;
    N -= 1;
    if (idx === 0) idx = K - 1;
    else idx -= 1;
  }

  if (N !== 0) return -1;

  return Math.max(...arr) - Math.min(...arr);
};

console.log(solution(N, K));

// 다른 풀이
/*
  let summary = 0;
  for (let i = 1; i < K + 1; i++) {
    summary += i;
  }
  if (summary > N) {
    console.log(-1);
  } else {
    N -= summary;
    if (N % K === 0) console.log(K - 1);
    else console.log(K);
  }
 */
