/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 값이 0인 x, y좌표들을 먼저 구하고
  // x좌표 고정 및 나머지 y좌표 순회하며 0으로 변경
  // y좌표 고정 및 나머지 x좌표 순회하며 0으로 변경
  let zeroPos = [];
  for (let i = 0; i < matrix.length; i += 1) {
    if (!matrix[i].includes(0)) {
      continue;
    }
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === 0) {
        zeroPos.push([i, j]);
      }
    }
  }
  console.log(zeroPos);
  for (const zero of zeroPos) {
    const x = zero[0];
    const y = zero[1];
    for (let i = 0; i < matrix[0].length; i += 1) {
      // y 고정, x 증가
      matrix[x][i] = 0;
    }
    for (let i = 0; i < matrix.length; i += 1) {
      // x 고정, y 증가
      matrix[i][y] = 0;
    }
  }
  return matrix;
};
