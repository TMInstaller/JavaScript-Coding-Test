/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const result = [];
  for (let index = 0; index < arr.length; index += 1) {
    result[index] = fn(arr[index], index);
  }
  return result;
};
