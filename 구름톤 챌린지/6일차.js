const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let s = input[1];

  function findSubstrings(s) {
    let substrings = new Set();
    let n = s.length;
    for (let i = 1; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        substrings.add(s.substring(0, i));
        substrings.add(s.substring(i, j));
        substrings.add(s.substring(j));
      }
    }
    return Array.from(substrings).sort();
  }

  function calculateScore(s, i, j, substrings) {
    let substr1 = s.substring(0, i);
    let substr2 = s.substring(i, j);
    let substr3 = s.substring(j);
    let score = 0;
    [substr1, substr2, substr3].forEach((substr) => {
      score += substrings.indexOf(substr) + 1;
    });
    return score;
  }

  function solve(s) {
    let n = s.length;
    let substrings = findSubstrings(s);
    let maxScore = 0;
    for (let i = 1; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        let score = calculateScore(s, i, j, substrings);
        maxScore = Math.max(maxScore, score);
      }
    }
    return maxScore;
  }

  console.log(solve(s));
});
