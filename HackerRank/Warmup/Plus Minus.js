function plusMinus(arr) {
  // Write your code here
  let answer = [0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      answer[0]++;
    } else if (arr[i] < 0) {
      answer[1]++;
    } else {
      answer[2]++;
    }
  }
  answer = answer.map((a) => (a = (a / arr.length).toFixed(6)));
  console.log(answer[0]);
  console.log(answer[1]);
  console.log(answer[2]);
}
