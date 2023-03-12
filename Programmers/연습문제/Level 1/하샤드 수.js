function solution(x) {
  let n = String(x)
    .split("")
    .reduce((a, b) => parseInt(a) + parseInt(b), 0);
  return x % n === 0 ? true : false;
}
