// Dijkstra's Shortest Path Algorithm
// Dijkstra's shortest path algorithm is an algorithm for
// finding the shortest path between nodes in a graph
/*
1. Assign a tentative distance value to every node.
   Set the initial node as the current node, and mark its
   tentative distance as zero.
2. For the current node, consider all of its neighbors and
   calculate their tentative distances. Compare the newly
   calculated tentative distance to the current assigned
   value and assign the smaller one.
3. When we're done considering all of the neighbors of the
   current node, nark the current node as visited.
   A visited node will never be checked again.
4. Select the unvisited node that is marked with the smallest
   tentative distance, and set it as the new "current node"
   then go back to step 2.
*/

function dijkstra(graph, start) {
  const visited = new Set();
  const distances = new Map();
  const prev = new Map();

  for (const node in graph) {
    distances.set(node, Infinity);
    prev.set(node, null);
  }

  distances.set(start, 0);

  while (visited.size !== Object.keys(graph).length) {
    let currNode = null;
    let currDist = Infinity;

    for (const [node, dist] of distances) {
      if (!visited.has(node) && dist < currDist) {
        currNode = node;
        currDist = dist;
      }
    }

    for (const [neighbor, weight] of graph[currNode]) {
      const dist = currDist + weight;
      if (dist < distances.get(neighbor)) {
        distances.set(neighbor, dist);
        prev.set(neighbor, currNode);
      }
    }

    visited.add(currNode);
  }

  return { distances, prev };
}

const graph = {
  A: { B: 2, C: 3 },
  B: { D: 4, E: 5 },
  C: { F: 6 },
  D: { G: 7 },
  E: { G: 8, H: 9 },
  F: { H: 10 },
  G: {},
  H: {},
};

console.log(dijkstra(graph, "A"));
