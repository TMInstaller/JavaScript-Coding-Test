function solution(absolutes, signs) {
  for (i in absolutes) {
    absolutes[i] = signs[i] === true ? absolutes[i] : absolutes[i] * -1;
  }
  return absolutes.reduce((a, b) => a + b, 0);
}
