/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  // Assign cells placeholder values if they need to change state
  for (let y = 0; y < board.length; ++y) {
    for (let x = 0; x < board[0].length; ++x) {
      let status = getCellStatus(board, x, y);
      board[y][x] = status;
    }
  }

  // Change cells with placeholder values to actual final value
  for (let y = 0; y < board.length; ++y) {
    for (let x = 0; x < board[0].length; ++x) {
      if (board[y][x] == -1) board[y][x] = 1; // 0 -> 1
      else if (board[y][x] == 2) board[y][x] = 0; // 1->0
    }
  }
};

let getCellStatus = function (board, x, y) {
  let neighborCount = getNeighborCount(board, x, y);
  let cellStatus = board[y][x];
  // If a cell goes 1->0, assign value 2. If cell goes 0->1, assign -1
  if (cellStatus === 1) {
    if (neighborCount < 2 || neighborCount > 3) cellStatus = 2;
  } else {
    if (neighborCount === 3) cellStatus = -1;
  }
  return cellStatus;
};

let getNeighborCount = function (board, x, y) {
  let width = board[0].length;
  let height = board.length;
  let leftBound = 0;
  let rightBound = width - 1;
  let bottomBound = 0;
  let topBound = height - 1;
  let count = 0;
  // Assigning 2 to cells going 1->0 and -1 for cells going 0->1 allows us to just
  // test neighbors for being > 0
  if (x - 1 >= leftBound && y + 1 <= topBound && board[y + 1][x - 1] > 0)
    count += 1; // Diag up-left
  if (x + 1 <= rightBound && y + 1 <= topBound && board[y + 1][x + 1] > 0)
    count += 1; // Diag up-right
  if (x - 1 >= leftBound && y - 1 >= bottomBound && board[y - 1][x - 1] > 0)
    count += 1; // Diag down-left
  if (x + 1 <= rightBound && y - 1 >= bottomBound && board[y - 1][x + 1] > 0)
    count += 1; // Diag down-right
  if (y + 1 <= topBound && board[y + 1][x] > 0) count += 1; // Up
  if (y - 1 >= bottomBound && board[y - 1][x] > 0) count += 1; // Down
  if (x + 1 <= rightBound && board[y][x + 1] > 0) count += 1; // Right
  if (x - 1 >= leftBound && board[y][x - 1] > 0) count += 1; // Left
  return count;
};
