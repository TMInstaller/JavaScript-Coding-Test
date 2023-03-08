function solution(num, k) {
  function numberToString(n) {
    return (n + "").split("");
  }
  let answer = 0;
  const number = numberToString(num);
  for (i = 0; i < number.length; i++) {
    if (String(k) === number[i]) {
      return i + 1;
    }
  }
  return -1;
}
