function solution(array, commands) {
  let ans = [];
  for (command of commands) {
    let arr = [...array];
    arr = arr.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
    ans.push(arr[command[2] - 1]);
  }
  return ans;
}
