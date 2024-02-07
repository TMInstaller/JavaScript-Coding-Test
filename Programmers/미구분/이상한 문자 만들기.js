function solution(s) {
  let answer = "";
  s = s.split(" ");
  for (let i = 0; i < s.length; i += 1) {
    for (let j = 0; j < s[i].length; j += 1) {
      answer += j % 2 === 0 ? s[i][j].toUpperCase() : s[i][j].toLowerCase();
    }
    if (i !== s.length - 1) answer += " ";
  }
  return answer;
}
