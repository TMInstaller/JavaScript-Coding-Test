function solution(arr, queries) {
  for (let q of queries) {
    for (let i = q[0]; i <= q[1]; i++) {
      arr[i] += 1;
    }
  }
  return arr;
}
