function solution(left, right) {
  let ans = 0;
  for (i = left; i <= right; i++) {
    let count = 0;
    for (j = 1; j <= i; j++) {
      count += i % j === 0 ? 1 : 0;
    }
    ans += count % 2 === 0 ? i : -i;
  }
  return ans;
}
