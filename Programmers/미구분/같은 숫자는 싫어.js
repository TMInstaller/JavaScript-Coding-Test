function solution(arr) {
  let answer = [arr[0]];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] === arr[i - 1]) continue;
    answer.push(arr[i]);
  }

  return answer;
}
