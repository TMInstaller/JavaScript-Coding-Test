function solution(myString) {
  let answer = "";
  const beforeI = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
  myString.split("").forEach((m) => {
    if (beforeI.includes(m)) {
      answer += "l";
    } else {
      answer += m;
    }
  });
  return answer;
}
