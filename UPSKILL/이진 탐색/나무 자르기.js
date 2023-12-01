let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let treeHeight = input[1].split(" ");

const solution = (N, M, treeHeight) => {
  let answer = 0;
  let start = 1;
  let end = treeHeight.reduce((a, b) => Math.max(a, b));

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (x of treeHeight) {
      total += Math.min(mid, x);
    }
    if (total <= M) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
};

console.log(solution(N, M, treeHeight));
