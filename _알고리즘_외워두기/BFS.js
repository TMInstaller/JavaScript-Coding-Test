/**
 * BFS(Breadth-First Search, 너비 우선 탐색)는 그래프나 트리를 탐색하는 알고리즘입니다.
 * 시작 노드로부터 인접한 노드를 먼저 탐색하는 방식으로, 가장 일반적으로 큐(Queue)를 사용하는 것입니다.
 *
 * 기본 개념은 다음과 같습니다.
 * 1. 큐 사용: 현재 노드와 인접한 모든 노드를 저장하고, FIFO(First In First Out) 방식으로 노드를 처리합니다.
 * 2. 레벨 별 탐색: BFS는 레벨 별(= 거리 별)로 탐색을 진행합니다.
 *     시작 노드에서 가까운 노드를 먼저 탐색한 후 점점 더 멀리 있는 노드를 탐색합니다.
 * 3. 방문 여부 체크: 중복 방문을 방지하기 위해 각 노드의 방문 여부를 체크해야 합니다.
 */

/**
 * 일반적으로 BFS를 적용하는 방법
 * 1. 노드 정의: 문제에 따라 노드가 무엇을 나타내는지 정의해야 합니다.
 *     예를 들어, 미로 탐색 문제에서 노드는 특정 위치를 나타낼 수 있습니다.
 * 2. 그래프 구조 파악: BFS는 그래프 형태의 데이터에서 사용됩니다.
 *     트리는 그래프의 한 종류지만, 일반적인 그래프 문제에서는 노드 간의 관계가 다를 수 있습니다.
 * 3. 방문한 노드 추적: 중복 방문을 방지하기 위해 어떤 노드를 방문했는지 추적해야 합니다.
 *     보통 Set이나 배열을 사용합니다.
 * 4. 조건 확인: BFS에서는 각 노드를 방문할 때 특정 조건을 만족하는지 확인할 필요가 있을 수 있습니다.
 *     예를 들어, 최단 경로 문제에서는 목적지에 도달했는지 확인합니다.
 */

// BFS 트리 탐색
const bfs = (tree) => {
  // BFS 탐색을 위한 큐
  let queue = [];
  // 탐색된 노드들을 저장하는 배열
  let result = [];

  // 루트 노드를 큐에 추가
  queue.push(tree.root);

  while (queue.length > 0) {
    // 큐의 첫 번째 요소를 꺼내담기
    let node = queue.shift();
    // 결과 배열에 노드의 값을 추가하기
    result.push(node.value);

    // 현재 노드의 자식 노드들을 큐에 추가하기
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  // 탐색 순서대로 정렬된 노드 값 반환
  return result;
};

// BFS 미로 탐색
function bfsMaze(maze, start, end) {
  let rows = maze.length;
  let cols = maze[0].length;
  let visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false));
  let queue = [start]; // 시작점

  // 방향 벡터 (상, 하, 좌, 우)
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length > 0) {
    let [row, col] = queue.shift();

    if (row === end[0] && col === end[1]) {
      // 목적지 도달
      return true;
    }

    for (let [dr, dc] of directions) {
      let newRow = row + dr,
        newCol = col + dc;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        maze[newRow][newCol] === 0 &&
        !visited[newRow][newCol]
      ) {
        queue.push([newRow, newCol]);
        visited[newRow][newCol] = true;
      }
    }
  }

  return false; // 경로가 없는 경우
}

// 미로를 나타내는 2차원 배열
let maze = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];

// 시작점과 도착점
let start = [0, 0]; // 미로의 시작점 (위치: 0행 0열)
let end = [4, 4]; // 목적지 (위치: 4행 4열)

// BFS 함수 호출
let result = bfsMaze(maze, start, end);

// 결과 출력
console.log("도달 가능 여부:", result);
