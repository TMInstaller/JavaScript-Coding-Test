/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let size = arr.length / 4;
  let count = 1;
  if (arr.length === 1) {
    return arr[0];
  }

  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    } else {
      count = 1;
    }

    if (count > size) {
      return arr[i];
    }
  }
};
