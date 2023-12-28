/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 첫날에는 팔 수 없으므로 -Infinity를 지정
  let [currentHold, currentNotHold] = [-Infinity, 0];

  for (const stockPrice of prices) {
    let [prevHold, prevNotHold] = [currentHold, currentNotHold];

    currentHold = Math.max(prevHold, prevNotHold - stockPrice);
    currentNotHold = Math.max(prevNotHold, prevHold + stockPrice);
  }

  return currentNotHold;
};
