function solution(ineq, eq, n, m) {
  let answer = 0;
  // ineq 조건
  if (ineq === "<") {
    answer = n < m ? 1 : 0;
    if (eq === "=" && n === m) {
      answer = 1;
    }
  } else if (ineq === ">") {
    answer = n > m ? 1 : 0;
    if (eq === "=" && n === m) {
      answer = 1;
    }
  }
  return answer;
}
