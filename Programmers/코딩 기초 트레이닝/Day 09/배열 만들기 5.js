function solution(intStrs, k, s, l) {
  let answer = [];
  for (i of intStrs) {
    let spl = i.split("").splice(s, l).join("");
    if (spl > k) answer.push(parseInt(spl));
  }
  return answer;
}
