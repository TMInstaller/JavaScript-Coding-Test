function solution(n, edge) {
  // graph 배열을 초기화. 각 노드와 그 노드에 연결된 다른 노드들의 정보를 저장할 예정.
  const graph = Array.from({ length: n + 1 }, () => []);

  // distance 배열을 초기화. 각 노드로부터 1번 노드까지의 거리를 저장할 예정.
  const distance = Array(n + 1).fill(-1);

  // BFS에 사용될 queue. 초기에는 1번 노드만 포함.
  const queue = [1];

  // edge 배열에 있는 모든 간선 정보를 통해 graph를 완성.
  edge.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  // BFS 시작. 1번 노드부터 시작하므로, distance[1]을 0으로 설정.
  distance[1] = 0;

  // BFS 진행.
  while (queue.length) {
    // 현재 방문 중인 노드를 queue에서 꺼냄.
    const current = queue.shift();

    // 현재 노드에 연결된 모든 노드들에 대해
    for (const next of graph[current]) {
      // 그 노드가 아직 방문되지 않았다면 (즉, distance[next]가 -1이라면)
      if (distance[next] === -1) {
        // 그 노드의 distance 값을 현재 노드의 distance 값에 1을 더한 값으로 설정하고
        distance[next] = distance[current] + 1;
        // 그 노드를 queue에 추가.
        queue.push(next);
      }
    }
  }

  // distance 배열에서 가장 큰 값 (즉, 1번 노드로부터 가장 먼 거리)를 찾고
  const maxDistance = Math.max(...distance);

  // 이 거리와 같은 거리를 가진 노드들의 수를 반환.
  return distance.filter((d) => d === maxDistance).length;
}
