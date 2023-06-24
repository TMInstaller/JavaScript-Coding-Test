let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 스스로의 풀이
let problem = input[0].split("-");

let answer = 0;
let haveToMinus = [];
let haveToPlus = [];
for (let i = 0; i < problem.length; i++) {
  if (i === 0) {
    haveToPlus.push(problem[i].split("+"));
    continue;
  }
  haveToMinus.push(problem[i].split("+"));
}

for (let i = 0; i < haveToPlus.length; i++) {
  for (let j = 0; j < haveToPlus[i].length; j++) {
    answer += Number(haveToPlus[i][j]);
  }
}

for (let i = 0; i < haveToMinus.length; i++) {
  for (let j = 0; j < haveToMinus[i].length; j++) {
    answer -= Number(haveToMinus[i][j]);
  }
}

console.log(answer);

// 다른 풀이
/*
  let groups = input[0].split('-');
  let answer = 0;
  for(let i=0; i<groups.length; i++){
    let cur = groups[i].split('+').map(Number).reduce((a, b) => a + b)
    if(i === 0) answer += cur;
    else answer -= cur;
  }

  console.log(answer);
*/
