function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i += 1) {
    answer += arr[i];
  }
  return answer / arr.length;
}
