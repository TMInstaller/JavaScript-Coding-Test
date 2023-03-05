function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  // 약분 전 분자, 분모
  var num = denom1 * numer2 + denom2 * numer1;
  var dnum = denom1 * denom2;
  // 약분 과정
  while (true) {
    var count = 0;
    for (i = 2; i <= dnum; i++) {
      if (num % i === 0 && dnum % i === 0) {
        count += 1;
        num = num / i;
        dnum = dnum / i;
      }
    }
    if (count === 0) {
      break;
    }
  }
  // answer에 값 넣기
  answer.push(num);
  answer.push(dnum);
  return answer;
}
