function solution(n) {
  const arr = n.toString().split("").map(Number);
  let answer = 0;
  for (let i = 0; i < arr.length; i += 1) {
    answer += arr[i];
  }
  return answer;
}
