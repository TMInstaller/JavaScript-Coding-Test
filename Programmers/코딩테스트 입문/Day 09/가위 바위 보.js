function solution(rsp) {
  let answer = "";
  let win = ["0", "5", "2"];
  for (i of rsp) {
    if (i === "2") answer += win[0];
    else if (i === "0") answer += win[1];
    else answer += win[2];
  }
  return answer;
}
