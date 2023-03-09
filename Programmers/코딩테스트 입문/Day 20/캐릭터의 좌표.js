function solution(keyinput, board) {
  const pos = [0, 0];
  const key = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };

  const wall = [(board[0] / 2) << 0, (board[1] / 2) << 0];
  keyinput.forEach((dir) => {
    if (
      Math.abs(pos[0] + key[dir][0]) <= wall[0] &&
      Math.abs(pos[1] + key[dir][1]) <= wall[1]
    ) {
      pos[0] += key[dir][0];
      pos[1] += key[dir][1];
    }
  });

  return pos;
}
