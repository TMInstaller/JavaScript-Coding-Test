let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [presentTime, presentMinute] = input[0].split(" ").map(Number);
let cookingTime = Number(input[1].split(" ")[0]);

function duckCooking(presentTime, presentMinute, cookingTime) {
  presentMinute += cookingTime;
  while (presentMinute >= 60) {
    presentTime += 1;
    presentMinute -= 60;
  }
  presentTime = presentTime % 24;
  console.log(`${presentTime} ${presentMinute}`);
}

duckCooking(presentTime, presentMinute, cookingTime);
