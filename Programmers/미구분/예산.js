function solution(d, budget) {
  d = d.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < d.length; i += 1) {
    sum += d[i];
    if (sum > budget) {
      return i;
    } else if (sum === budget) {
      return i + 1;
    }
  }
  return d.length;
}
