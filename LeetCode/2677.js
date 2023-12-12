/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let result = [];
  for (let i = 0; i < arr.length - (arr.length % size); i += size) {
    let sArr = [];
    for (let j = 0; j < size; j += 1) {
      sArr.push(arr[i + j]);
    }
    result.push(sArr);
  }
  let lastArr = [];
  for (let i = arr.length - (arr.length % size); i < arr.length; i += 1) {
    lastArr.push(arr[i]);
  }
  if (lastArr.length) {
    result.push(lastArr);
  }
  return result;
};
