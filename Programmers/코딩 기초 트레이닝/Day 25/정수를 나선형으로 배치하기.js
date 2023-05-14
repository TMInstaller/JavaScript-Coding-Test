function solution(n) {
  let squareArr = new Array(n).fill().map(() => new Array(n).fill(0));
  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      squareArr[startRow][i] = counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      squareArr[i][endCol] = counter++;
    }
    endCol--;
    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        squareArr[endRow][i] = counter++;
      }
      endRow--;
    }
    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        squareArr[i][startCol] = counter++;
      }
      startCol++;
    }
  }
  return squareArr;
}
