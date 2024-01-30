function solution(left, right) {
  let arr = [];
  for (let i = left; i <= right; i += 1) {
    arr.push(i);
  }

  let sum = 0;

  for (const num of arr) {
    if (num === 1) {
      sum -= 1;
      continue;
    }
    let count = 0;
    for (let i = 1; i <= num; i += 1) {
      if (num % i === 0) count += 1;
    }
    if (count % 2 === 0) {
      sum += num;
    } else {
      sum -= num;
    }
  }

  return sum;
}
