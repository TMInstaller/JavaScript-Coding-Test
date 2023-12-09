/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      result.push([arr[i], arr[j], arr[i] / arr[j]]);
    }
  }
  const answer = result.sort((a, b) => a[2] - b[2]);
  return [answer[k - 1][0], answer[k - 1][1]];
};
