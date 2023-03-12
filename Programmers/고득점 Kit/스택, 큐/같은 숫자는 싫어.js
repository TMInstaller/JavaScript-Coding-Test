function solution(arr) {
  var answer = [arr[0]];
  for (i = 1; i < arr.length; i++) {
    let prev = answer[answer.length - 1];
    if (prev === arr[i]) {
      continue;
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
}
