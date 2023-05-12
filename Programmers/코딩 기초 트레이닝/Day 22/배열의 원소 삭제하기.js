function solution(arr, delete_list) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (delete_list.includes(arr[i])) {
      continue;
    }
    answer.push(arr[i]);
  }
  return answer;
}
