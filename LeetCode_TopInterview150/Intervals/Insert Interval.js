/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
  // newInterval[0] ~ newInterval[1] 사이에 있는 숫자들이
  // 포함되어있는 intervals의 배열들 추출
  let arr = [];
  let notIncludedArr = [];
  const newRange = getRange(newInterval);
  for (const interval of intervals) {
    const range = getRange(interval);
    if (haveCommon(newRange, range)) {
      arr.push(range);
    } else {
      notIncludedArr.push(interval);
    }
  }
  arr.push(newRange);
  let mergedRange = [Math.min(...arr.flat()), Math.max(...arr.flat())];
  return [...notIncludedArr, mergedRange].sort((a, b) => a[0] - b[0]);
};

function getRange(arr) {
  let arrRange = [];
  const [start, end] = [arr[0], arr[1]];
  for (let i = start; i <= end; i += 1) {
    arrRange.push(i);
  }
  return arrRange;
}

function haveCommon(a, b) {
  return a.some((ele) => b.includes(ele));
}
