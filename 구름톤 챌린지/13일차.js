const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
rl.on("line", (line) => {
  lines.push(line);
});

rl.on("close", () => {
  const [M, K] = lines[0].split(" ").map(Number);
  const town = lines.slice(1, M + 1).map((line) => line.split(" ").map(Number));

  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  function inSpace(r, c, M) {
    return r >= 0 && r < M && c >= 0 && c < M;
  }

  function search(r, c, town, visited, M, K) {
    const queue = [];
    queue.push({ r, c });
    visited[r][c] = true;
    let cnt = 1;

    while (queue.length) {
      const cur = queue.shift();
      for (let i = 0; i < 4; i++) {
        const tempR = cur.r + dr[i];
        const tempC = cur.c + dc[i];
        if (
          inSpace(tempR, tempC, M) &&
          !visited[tempR][tempC] &&
          town[tempR][tempC] === town[r][c]
        ) {
          queue.push({ r: tempR, c: tempC });
          visited[tempR][tempC] = true;
          cnt++;
        }
      }
    }

    return cnt < K ? 0 : 1;
  }

  const visited = Array.from({ length: M }, () => Array(M).fill(false));
  const complexCnt = Array(31).fill(0);

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j]) {
        complexCnt[town[i][j]] += search(i, j, town, visited, M, K);
      }
    }
  }

  let max = 0;
  let result = 0;
  for (let i = 1; i < 31; i++) {
    if (complexCnt[i] === 0) continue;
    if (complexCnt[i] >= max) {
      max = complexCnt[i];
      result = i;
    }
  }

  console.log(result);
});
