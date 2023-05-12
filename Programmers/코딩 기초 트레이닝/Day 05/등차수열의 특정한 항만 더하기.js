function solution(a, d, included) {
  let answer = included[0] ? a : 0;
  let numArr = [a];
  for (let i = 1; i < included.length; i++) {
    numArr.push(numArr[i - 1] + d);
    if (included[i]) {
      answer += numArr[i];
    }
  }
  return answer;
}
