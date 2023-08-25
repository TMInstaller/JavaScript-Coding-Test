const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", (line) => {
  input = line;
  rl.close();
});

rl.on("close", () => {
  let n = Number(input);

  // 14, 7, 1을 보면 되는데,
  // 7로 나누어지는 것의 몫을 2로 나누고 홀수였다면 1을 더한다
  function solution(n) {
    let answer = 0;
    let [bandage, medicine, painkiller] = [1, 7, 14];
    let num = 0;

    while (n > 0) {
      if (n % 7 !== 0) {
        n--;
        answer++;
      } else {
        num = n / 7;
        if (num % 2 === 0) {
          answer += num / 2;
        } else {
          answer += Math.floor(num / 2) + 1;
        }
        break;
      }
    }
    return answer;
  }

  console.log(solution(input));
});
