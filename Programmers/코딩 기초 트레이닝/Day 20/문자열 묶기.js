function solution(strArr) {
  const count = (arr, val) => arr.filter((n) => n.length === val).length;
  let arr = [];
  let countArr = [];
  for (let i = 0; i < strArr.length; i++) {
    arr.push(strArr[i].length);
  }
  arr = [...new Set(arr)];
  for (let i = 0; i < arr.length; i++) {
    countArr.push(count(strArr, arr[i]));
  }

  return Math.max(...countArr);
}
