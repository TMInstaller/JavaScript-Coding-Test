/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const res = Array.from({ length: m }, () => Array(n).fill(0));
  const onesRow = grid.map((row) => row.filter((val) => val === 1).length);
  const onesCol = Array.from(
    { length: n },
    (_, j) => grid.map((row) => row[j]).filter((val) => val === 1).length
  );

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[i][j] = onesRow[i] + onesCol[j] - (m - onesRow[i]) - (n - onesCol[j]);
    }
  }

  return res;
};
