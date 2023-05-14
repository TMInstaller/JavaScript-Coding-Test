function solution(arr) {
  let stk = [];
  let i = 0;
  while (i < arr.length) {
    if (stk.length) {
      if (stk[stk.length - 1] === arr[i]) {
        stk.pop();
        i++;
      } else {
        stk.push(arr[i]);
        i++;
      }
    } else {
      stk.push(arr[i]);
      i++;
    }
  }
  return stk.length ? stk : [-1];
}
