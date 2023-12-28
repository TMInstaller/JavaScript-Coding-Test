/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // Sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right += 1;
  }
  return max_profit;
};
