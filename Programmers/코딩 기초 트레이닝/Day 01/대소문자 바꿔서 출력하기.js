const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (char >= "a" && char <= "z") {
      result += char.toUpperCase(); // 소문자를 대문자로 변경
    } else {
      result += char.toLowerCase(); // 대문자를 소문자로 변경
    }
  }
  console.log(result);
});
