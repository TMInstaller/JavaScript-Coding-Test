function birthdayCakeCandles(candles) {
  // Write your code here
  const maxCandle = Math.max(...candles);
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === maxCandle) {
      count++;
    }
  }
  return count;
}
