function solution(price, money, count) {
  let ans = 0;
  for (i = 1; i <= count; i++) {
    ans += price * i;
  }
  return ans - money > 0 ? ans - money : 0;
}
