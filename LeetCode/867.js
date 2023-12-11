/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const result = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    const arr = [];
    for (let j = 0; j < matrix.length; j += 1) {
      arr.push(matrix[j][i]);
    }
    result.push(arr);
  }

  return result;
};
