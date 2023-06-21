let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = Number(input[0]);
let words = [];

for (let i = 1; i <= T; i++) {
  words.push(input[i]);
}

function solution(words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let alpha = new Set();

    let isGroupWord = true;
    for (let j = 0; j < word.length; j++) {
      if (alpha.has(word[j]) && word[j] !== word[j - 1]) {
        isGroupWord = false;
        break;
      }
      alpha.add(word[j]);
    }

    count += isGroupWord ? 1 : 0;
  }
  return count;
}

console.log(solution(words));
