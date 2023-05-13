function solution(arr, flag) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    // flag의 true, false 확인
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        answer.push(arr[i]);
      }
    } else if (!flag[i]) {
      for (let j = 0; j < arr[i]; j++) {
        answer.pop();
      }
    }
  }
  return answer;
}
