function solution(n, control) {
  let answer = n;
  const command = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };
  control.split("").forEach((c) => {
    answer += command[c];
  });
  return answer;
}
