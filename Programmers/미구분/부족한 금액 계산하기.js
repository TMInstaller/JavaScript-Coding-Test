function solution(price, money, count) {
  let change = money;
  for (let i = 1; i <= count; i += 1) {
    change -= price * i;
  }

  return change > 0 ? 0 : -change;
}
