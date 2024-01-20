function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const queue = [[0, 0, 1]]; // 현재 위치와 거리
  visited[0][0] = true;

  while (queue.length) {
    const [x, y, dist] = queue.shift();
    if (x === n - 1 && y === m - 1) return dist;

    for (const [dx, dy] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < m &&
        maps[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  return -1;
}
