function solution(a, b) {
  let answer = 0;
  if (b < a) {
    let temp = a;
    a = b;
    b = temp;
  }
  for (let i = a; i <= b; i += 1) {
    answer += i;
  }
  return answer;
}
