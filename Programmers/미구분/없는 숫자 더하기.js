function solution(numbers) {
  let sum = 0;
  for (let i = 1; i < 10; i += 1) {
    if (!numbers.includes(i)) {
      sum += i;
    }
  }
  return sum;
}
