/**
 * @param {number[][]} img
 * @return {number[][]}
 */
const imageSmoother = function (img) {
  const m = img.length;
  const n = img[0].length;
  const result = [];

  for (let i = 0; i < m; i += 1) {
    result[i] = [];
    for (let j = 0; j < n; j += 1) {
      const neighbors = [
        img[i - 1]?.[j - 1],
        img[i - 1]?.[j],
        img[i - 1]?.[j + 1],
        img[i]?.[j - 1],
        img[i]?.[j],
        img[i]?.[j + 1],
        img[i + 1]?.[j - 1],
        img[i + 1]?.[j],
        img[i + 1]?.[j + 1],
      ].filter((val) => val !== undefined);
      const average = Math.floor(
        neighbors.reduce((acc, curr) => acc + curr, 0) / neighbors.length
      );
      result[i][j] = average;
    }
  }

  return result;
};
