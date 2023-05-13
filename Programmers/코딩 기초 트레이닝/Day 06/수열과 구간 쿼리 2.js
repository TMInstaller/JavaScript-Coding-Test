function solution(arr, queries) {
  let answer = [];
  for (let q of queries) {
    let sArr = [];
    let num = 0;
    for (let j = q[0]; j <= q[1]; j++) {
      sArr = [...sArr, arr[j]];
    }
    sArr.sort((a, b) => a - b);
    for (let s of sArr) {
      if (s > q[2]) {
        answer.push(s);
        num = 1;
        break;
      }
    }
    if (!num) answer.push(-1);
  }
  return answer;
}
