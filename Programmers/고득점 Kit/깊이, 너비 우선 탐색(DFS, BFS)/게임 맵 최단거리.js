function solution(maps) {
  let answer = 0;
  // bfs를 통해 최단거리를 구한다.
  // 시작 지점은 언제나 maps[0][0]이다.
  // 도착 지점은 maps[maps.length - 1][maps[0].length - 1]이다.
  // 1) 시작 지점을 큐에 담는다.
  let queue = [[0, 0]];
  // 2) 큐에 담긴 값을 꺼내서 BFS 탐색을 한다.
  while (queue.length > 0) {
    let [x, y] = queue.shift();
    // 3) 도착 지점에 도착하면 리턴한다.
    if (x === maps.length - 1 && y === maps[0].length - 1) return maps[x][y];
    // 4) 도착하지 않았다면 움직일 수 있는 좌표 값을 큐에 담는다.
    // 위, 아래, 우측, 좌측 방향 설정
    const moveX = [1, -1, 0, 0];
    const moveY = [0, 0, 1, -1];
    for (let i = 0; i < 4; i++) {
      let chX = x + moveX[i];
      let chY = y + moveY[i];
      if (
        chX >= 0 &&
        chX < maps.length &&
        chY >= 0 &&
        chY < maps[0].length &&
        maps[chX][chY] === 1
      ) {
        queue.push([chX, chY]);
        maps[chX][chY] = maps[x][y] + 1;
      }
    }
  }
  // 만약 도착지점에 도착하지 못했다면 -1을 리턴한다.
  if (maps[maps.length - 1][maps[0].length - 1] === 1) return -1;
  return answer;
}
