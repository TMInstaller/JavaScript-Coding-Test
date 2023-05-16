// BFS 알고리즘
// 1. 시작 노드를 큐에 넣는다.
// 2. 현재 큐의 노드를 빼서 visited에 추가한다.
// 3. 현재 방문한 노드와 인접한 노드 중 방문하지 않은 노드를 큐에 넣는다.
// 4. 큐가 빌 때까지 2~3번 과정을 반복한다.

// BFS 알고리즘의 사용 예
// 1. 두 노드 사이의 최단 경로를 찾고 싶을 때
// 2. 임의의 경로를 찾고 싶을 때
// 3. 모든 경로를 탐색하고 싶을 때

// 1번에 대한 예시상황은 다익스트라 알고리즘을 사용하는 것이 더 효율적이다.
// 2번에 대한 예시상황은 DFS 알고리즘을 사용하는 것이 더 효율적이다.
// 3번에 대한 예시상황은 BFS 알고리즘을 사용하는 것이 더 효율적이다.
// 따라서 BFS 알고리즘은 3번에 대한 예시상황에 사용하는 것이 좋다.

// 인접 리스트를 이용한 BFS 구현
// 이 알고리즘은 bfs를 이용하여 그래프를 탐색하고 결과를 배열로 반환한다.
// 결과는 시작 노드부터 탐색한 순서대로 배열에 담아 반환한다.
function bfs(graph, start) {
  const visited = [];
  const queue = [start];
  while (queue.length > 0) {
    const n = queue.shift();
    if (!visited.includes(n)) {
      visited.push(n);
      const sub = graph[n].filter((v) => !visited.includes(v));
      for (let i of sub) {
        queue.push(i);
      }
    }
  }
  return visited;
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

// 아래 로그는 BFS 알고리즘을 적용한 결과입니다.
console.log(bfs(graph, "A"));
// A, B, C, D, G, H, I, E, F, J
