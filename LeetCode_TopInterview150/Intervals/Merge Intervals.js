/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  while (true) {
    intervals.push([]);
    let count = 0;
    for (let i = 0; i < intervals.length - 1; i += 1) {
      if (!doMerge(intervals[i], intervals[i + 1])) {
        result.push(intervals[i]);
      } else {
        result.push(doMerge(intervals[i], intervals[i + 1]));
        i += 1;
        count += 1;
      }
    }
    intervals = [...result];
    if (count === 0) break;
    result = [];
  }

  return intervals;
};

function doMerge(arr1, arr2) {
  if (arr1[1] >= arr2[0] && arr2[1] >= arr1[1]) {
    return [Math.min(arr1[0], arr2[0]), Math.max(arr1[1], arr2[1])];
  } else if (arr2[1] <= arr1[1] && arr2[0] >= arr1[0]) {
    return [arr1[0], arr1[1]];
  } else {
    return false;
  }
}
