const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [N, K] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  function solution(N, K, arr) {
    let answer = 0;
    let sortedNums = arr.map((num) => {
      return {
        num: num,
        countOnes: num
          .toString(2)
          .split("")
          .reduce((acc, bit) => acc + (bit === "1" ? 1 : 0), 0),
      };
    });
    sortedNums.sort((a, b) => {
      if (a.countOnes === b.countOnes) {
        return b.num - a.num;
      } else {
        return b.countOnes - a.countOnes;
      }
    });
    // 모두 2진수로 변환하고 객체로 넣기 v
    // 2진수에 포함된 1의 개수 세기 v
    // 1의 개수를 기준으로 내림차순 정렬
    // -> 여기서 1의 개수가 같다면 10진수를 기준으로 내림차순 정렬
    // 객체 형식을 이용하여 풀 것
    // 정렬 이후 앞에서 K번째에 위치한 수 출력하기
    answer = sortedNums[K - 1].num;
    return answer;
  }
  console.log(solution(N, K, arr));
});
