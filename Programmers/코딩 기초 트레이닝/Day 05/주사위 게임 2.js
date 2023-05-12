function solution(a, b, c) {
  let answer = 0;
  const uniqueNumber = new Set([a, b, c]);
  if (uniqueNumber.size === 2) {
    answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  } else if (uniqueNumber.size === 1) {
    answer =
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
  } else {
    answer = a + b + c;
  }

  return answer;
}
