/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = (arr, start) => {
  let queue = [];
  queue.push(start);

  while (queue.length) {
    const i = queue.shift();

    // solution found
    if (arr[i] === 0) return true;

    // check that item aleady processed
    if (arr[i] === null) continue;

    // go right
    if (i + arr[i] <= arr.length) {
      queue.push(i + arr[i]);
    }

    // go left
    if (i - arr[i] >= 0) {
      queue.push(i - arr[i]);
    }

    // mark visited
    arr[i] = null;
  }

  return false;
};
