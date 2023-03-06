function factorial(num) {
  if (num === 0) return 1;
  else return num * factorial(num - 1);
}

const solution = (balls, share) =>
  Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
