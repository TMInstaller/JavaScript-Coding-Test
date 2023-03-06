function solution(s) {
  const num = s.split(" ");
  let answer = parseInt(num[0]);

  for (i = 1; i < num.length; i++) {
    if (num[i] >= -1000 && num[i] <= 1000) {
      answer += parseInt(num[i]);
    } else {
      answer -= parseInt(num[i - 1]);
    }
  }
  return answer;
}
