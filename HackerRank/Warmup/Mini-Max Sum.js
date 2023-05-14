function miniMaxSum(arr) {
  // Write your code here
  let answer = [0, 0];
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    answer[0] += arr[i];
  }
  for (let i = 1; i < arr.length; i++) {
    answer[1] += arr[i];
  }
  console.log(`${answer[0]} ${answer[1]}`);
}
