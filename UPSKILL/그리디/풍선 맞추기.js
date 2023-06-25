let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function solution(N, arr) {
  let answer = 0;

  let height = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      height = arr[i];
    } else {
      continue;
    }
    if (height === arr[i]) {
      arr[i] = 0;
      height--;
      for (let j = i; j < arr.length; j++) {
        if (height === arr[j]) {
          arr[j] = 0;
          height--;
        }
      }
      answer++;
    }
  }

  return answer;
}

console.log(solution(N, arr));
