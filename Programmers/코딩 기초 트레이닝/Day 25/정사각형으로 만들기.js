function solution(arr) {
  let answer = [[]];
  const maxSquare = Math.max(arr.length, arr[0].length);
  const squareArr = Array(maxSquare)
    .fill()
    .map(() => Array(maxSquare).fill(0));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      squareArr[i][j] = arr[i][j];
    }
  }
  return squareArr;
}
