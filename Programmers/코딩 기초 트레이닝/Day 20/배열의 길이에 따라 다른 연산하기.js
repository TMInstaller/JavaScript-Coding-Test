function solution(arr, n) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 === 0 && i % 2 === 1) {
      ans.push(arr[i] + n);
    } else if (arr.length % 2 === 1 && i % 2 === 0) {
      ans.push(arr[i] + n);
    } else {
      ans.push(arr[i]);
    }
  }

  return ans;
}
