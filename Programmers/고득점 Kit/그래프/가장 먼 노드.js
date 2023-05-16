function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const distance = Array(n + 1).fill(-1);
  const queue = [1];

  edge.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  distance[1] = 0;

  while (queue.length) {
    const current = queue.shift();

    for (const next of graph[current]) {
      if (distance[next] === -1) {
        distance[next] = distance[current] + 1;
        queue.push(next);
      }
    }
  }

  const maxDistance = Math.max(...distance);
  return distance.filter((d) => d === maxDistance).length;
}
