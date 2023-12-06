/**
 * @param {number} n
 * @return {number}
 */

var totalMoney = function (n) {
  let weeks = 0;
  let day = 1;
  let arr = [];

  // 7씩 반복하며 7증가할 때마다 0부터 현재 weeks만큼 더해지도록 하기
  for (let i = 1; i <= n; i += 1) {
    arr.push(day + weeks);
    day += 1;
    if (i % 7 === 0) {
      day = 1;
      weeks += 1;
    }
  }
  return arr.reduce((a, b) => a + b);
};
