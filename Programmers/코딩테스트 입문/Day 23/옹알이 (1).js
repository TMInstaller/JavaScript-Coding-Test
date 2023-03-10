function solution(babbling) {
  let answer = 0;
  let can = ["aya", "ye", "woo", "ma"];

  for (let bab in babbling) {
    let init = babbling[bab];

    for (let c in can) {
      if (babbling[bab].includes(can[c])) {
        init = init.replace(can[c], "X");
      }
    }

    init = init.replace(/X/gi, "");
    if (init.length === 0) {
      answer += 1;
    }
  }
  return answer;
}
