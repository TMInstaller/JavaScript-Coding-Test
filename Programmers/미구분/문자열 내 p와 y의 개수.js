function solution(s) {
  let answer = true;
  s = s.toLowerCase();

  let countP = 0,
    countY = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "p") {
      countP += 1;
    } else if (s[i] === "y") {
      countY += 1;
    } else {
      continue;
    }
  }

  if (countP === countY) return true;

  return false;
}
