function solution(arr, k) {
  let answer = [...new Set(arr)];
  if (answer.length <= k) {
    answer.push(...Array(k - answer.length).fill(-1));
  } else if (answer.length > k) {
    while (answer.length !== k) {
      answer.pop();
    }
  }
  return answer;
}
