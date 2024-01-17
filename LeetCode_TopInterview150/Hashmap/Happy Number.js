/**
 * @param {number} n
 * @return {boolean}
 */
const sumOfSquares = (num) => {
  let sum = 0;
  while (num > 0) {
    let last_diget = num % 10;
    sum += last_diget ** 2;
    num = Math.floor(num / 10);
  }
  return sum;
};

const isHappy = (n) => {
  if (n === 1) return true;

  let slow = n;
  let fast = n;

  while (true) {
    slow = sumOfSquares(slow);
    fast = sumOfSquares(sumOfSquares(fast));
    if (slow === fast) break;
  }

  return slow === 1;
};
