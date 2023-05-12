function solution(rny_string) {
  let answer = "";
  rny_string.split("").forEach((rn) => {
    answer += rn === "m" ? "rn" : rn;
  });
  return answer;
}
