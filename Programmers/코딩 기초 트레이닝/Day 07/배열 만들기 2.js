function solution(l, r) {
  function isOnlyZeroAndFive(num) {
    const numStr = String(num);
    for (let i = 0; i < numStr.length; i++) {
      if (numStr[i] !== "0" && numStr[i] !== "5") {
        return false;
      }
    }
    return true;
  }
  let answer = [];

  for (let num = l; num <= r; num++) {
    if (isOnlyZeroAndFive(num)) {
      answer.push(num);
    }
  }

  return answer.length > 0 ? answer : [-1];
}
