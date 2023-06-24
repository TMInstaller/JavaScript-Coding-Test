let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);

let coordinate = input[1].split(" ").map(Number);

let setArr = [...new Set(coordinate)];
setArr.sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < setArr.length; i++) {
  myMap.set(setArr[i], i);
}

answer = "";
for (c of coordinate) answer += `${myMap.get(c)} `;
console.log(answer);
