function solution(num) {
  let count = 0;

  while (true) {
    if (count >= 500) return -1;
    if (num === 1) return count;

    if (num % 2 === 0) {
      num = num / 2;
      count += 1;
      continue;
    }

    if (num % 2 === 1) {
      num = num * 3 + 1;
      count += 1;
    }
  }
}
