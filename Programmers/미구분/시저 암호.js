function solution(s, n) {
  let answer = "";
  const ALPHA = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  const ALPHA2 = ALPHA.toUpperCase();

  s = s.split("");
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === " ") answer += " ";
    if (ALPHA.includes(s[i])) {
      answer += ALPHA[ALPHA.indexOf(s[i]) + n];
    }
    if (ALPHA2.includes(s[i])) {
      answer += ALPHA2[ALPHA2.indexOf(s[i]) + n];
    }
  }

  return answer;
}
