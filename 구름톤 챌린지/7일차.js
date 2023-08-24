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
  const [N, K] = input[0].split(" ").map(Number);
  const graph = input.slice(1).map((line) => line.split(" ").map(Number));

  function solution(N, K, graph) {
    let answer = 0;
    const dy = [-1, 1, 0, 0, -1, -1, 1, 1];
    const dx = [0, 0, -1, 1, -1, 1, -1, 1];

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        if (graph[row][col] === 1) {
          continue;
        }

        let count = 0;
        for (let i = 0; i < 8; i++) {
          const next_y = row + dy[i];
          const next_x = col + dx[i];

          if (
            0 <= next_y &&
            next_y < N &&
            0 <= next_x &&
            next_x < N &&
            graph[next_y][next_x] === 1
          ) {
            count += 1;
          }
        }

        if (count === K) {
          answer += 1;
        }
      }
    }

    console.log(answer);
  }

  solution(N, K, graph);
});
