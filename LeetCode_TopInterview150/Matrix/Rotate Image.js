/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;

  const transpose = () => {
    for (let i = 0; i < n; i += 1) {
      for (let j = i + 1; j < n; j += 1) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
  };

  const rotate = () => {
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n / 2; j += 1) {
        [matrix[i][j], matrix[i][n - 1 - j]] = [
          matrix[i][n - 1 - j],
          matrix[i][j],
        ];
      }
    }
  };

  transpose(matrix);
  rotate(matrix);
};
