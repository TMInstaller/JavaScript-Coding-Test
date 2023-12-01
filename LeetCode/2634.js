/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function (arr, fn) {
  let answer = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (fn(arr[i], i)) {
      answer.push(arr[i]);
    }
  }
  return answer;
};
