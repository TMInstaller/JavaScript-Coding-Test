function solution(s) {
  let answer = "";

  let WORD = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let queue = "";
  for (let i = 0; i < s.length; i += 1) {
    queue += s[i];
    if (!isNaN(Number(queue))) {
      answer += queue;
      queue = "";
    } else if (WORD.includes(queue)) {
      answer += WORD.indexOf(queue);
      queue = "";
    }
  }

  return Number(answer);
}
