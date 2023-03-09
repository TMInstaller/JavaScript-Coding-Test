function solution(board) {
  let answer = 0;
  let danger = [
    [0, 1],
    [0, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
  ];

  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        danger.forEach((item) => {
          let [nx, ny] = item;
          [nx, ny] = [i + nx, j + ny];
          if (
            nx >= 0 &&
            nx < board.length &&
            ny >= 0 &&
            ny < board.length &&
            board[nx][ny] === 0
          ) {
            board[nx][ny] = 2;
          }
        });
      }
    }
  }
  board.forEach((a) => a.forEach((b) => (b === 0 ? answer++ : 0)));
  return answer;
}
