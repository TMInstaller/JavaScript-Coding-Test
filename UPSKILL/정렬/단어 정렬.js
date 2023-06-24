let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);

let words = [];
for (let i = 1; i <= N; i++) {
  words.push(input[i]);
}

let wordsSet = [...new Set(words)];

function compare(a, b) {
  if (a.length !== b.length) return a.length - b.length;
  else return a.localeCompare(b);
}
wordsSet.sort(compare);

let answer = "";

for (let i = 0; i < wordsSet.length; i++) {
  answer += `${wordsSet[i]}\n`;
}

console.log(answer);
