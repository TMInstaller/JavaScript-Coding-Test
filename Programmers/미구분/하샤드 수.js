function solution(x) {
  const arr = x.toString().split("").map(Number);
  const sum = arr.reduce((a, b) => a + b);

  if (x % sum === 0) return true;

  return false;
}
