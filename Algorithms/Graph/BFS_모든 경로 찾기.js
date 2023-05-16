// BFS를 이용하여 모든 경로를 찾는 방법은 다음과 같다.

// 1. 시작 노드를 큐에 넣는다.
// 2. 큐에서 노드를 꺼낸다.
// 3. 꺼낸 노드가 방문한 노드가 아니라면 방문한 노드에 추가한다.
// 4. 꺼낸 노드와 인접한 노드 중 방문하지 않은 노드를 큐에 넣는다.
// 5. 큐가 빌 때까지 2~4번 과정을 반복한다.
// 6. 모든 경로를 찾았다면 방문한 노드를 반환한다.
// 위의 과정을 코드로 구현하면 다음과 같다.

// 인접 리스트를 이용한 BFS 구현
// 이 알고리즘은 bfs를 이용하여 그래프를 탐색하고 결과를 배열로 반환한다.
// 결과는 시작 노드부터 탐색한 순서대로 배열에 담아 반환한다.
function bfs(graph, start) {
  const visited = []; // 방문한 노드
  const queue = [start]; // 큐에 시작 노드를 넣는다.
  while (queue.length > 0) {
    // 큐가 빌 때까지 반복한다.
    const n = queue.shift(); // 큐에서 노드를 꺼낸다.
    if (!visited.includes(n)) {
      // 꺼낸 노드가 방문한 노드가 아니라면
      visited.push(n); // 방문한 노드에 추가한다.
      const sub = graph[n].filter((v) => !visited.includes(v)); // 꺼낸 노드와 인접한 노드 중 방문하지 않은 노드를 찾는다.
      for (let i of sub) {
        // 방문하지 않은 노드를 큐에 넣는다.
        queue.push(i); // 큐에 넣는다.
      }
    }
  }
  return visited; // 방문한 노드를 반환한다.
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
