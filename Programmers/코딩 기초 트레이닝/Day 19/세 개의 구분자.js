function solution(myStr) {
  let splitArr = myStr.split(/[abc]+/); // "a", "b", "c"를 구분자로 사용하여 문자열을 분리합니다.
  let answer = splitArr.filter((item) => item !== ""); // 빈 문자열을 제거합니다.

  if (answer.length === 0) {
    answer.push("EMPTY");
  }

  return answer;
}
