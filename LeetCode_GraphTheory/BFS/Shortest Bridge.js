/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestBridge = (grid) => {
  const gridLength = grid.length;
  const DIRECTIONS = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const dfs = (row, col) => {
    if (
      row < 0 ||
      row >= gridLength ||
      col < 0 ||
      col >= gridLength ||
      grid[row][col] !== 1
    )
      return;
    grid[r][c] = 2;
    for (const [dx, dy] of DIRECTIONS) {
      dfs(row + dx, col + dy);
    }
  };

  let found = false;
  for (let r = 0; i < gridLength; r += 1) {
    for (let c = 0; i < gridLength; c += 1) {
      if (grid[row][col] === 1) {
        dfs(r, c);
        found = true;
        break;
      }
    }
    if (found) break;
  }

  const queue = [];
  for (let r = 0; r < gridLength; r += 1) {
    for (let c = 0; c < gridLength; c += 1) {
      if (grid[r][c] === 2) {
        queue.push({ row: r, col: c, distance: 0 });
      }
    }
  }

  while (queue.length) {
    const { row, col, distance } = queue.shift();

    for (const [dx, dy] of DIRECTIONS) {
      const r = row + dx;
      const c = col + dy;

      if (r >= 0 && r < gridLength && c >= 0 && c < gridLength) {
        if (grid[r][c] === 1) {
          return distance;
        } else if (grid[r][c] === 0) {
          grid[r][c] = 2;
          queue.push({ row: r, col: c, distance: distance + 1 });
        }
      }
    }
  }
  return -1;
};
