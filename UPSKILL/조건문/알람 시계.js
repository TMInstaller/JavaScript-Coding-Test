let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let time = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);

function alarm(time, minute) {
  if (minute - 45 < 0) {
    if (time - 1 < 0) {
      time = 23;
    } else {
      time -= 1;
    }
    minute += 15;
    console.log(`${time} ${minute}`);
  } else {
    minute -= 45;
    console.log(`${time} ${minute}`);
  }
}

alarm(time, minute);
