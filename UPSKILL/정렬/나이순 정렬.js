let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 스스로의 풀이
let N = Number(input[0]);

let members = [];

for (let i = 1; i <= N; i++) {
  let [age, name] = input[i].split(" ");
  members.push({
    age: Number(age),
    name,
    idx: i,
  });
}

members.sort((a, b) => {
  if (a.age !== b.age) return a.age - b.age;
  else return a.idx - b.idx;
});

let answer = "";
for (let i = 0; i < members.length; i++) {
  answer += `${members[i].age} ${members[i].name}\n`;
}

console.log(answer);

// 다른 풀이
/*
  let n = Number(input[0]);
  let arr = [];

  for (let i = 1; i <= n; i++) {
    let age = Number(input[i].split(" ")[0]);
    let name = input[i].split(" ")[1];
    arr.push([age, name]);
  }

  arr.sort((a, b) => a[0] - b[0]);

  let answer = "";
  for (let a of arr) answer += `${a[0]} ${a[1]}\n`;
  console.log(answer);
*/
