function solution(n, computers) {
  let visited = new Array(n).fill(false);
  let networks = 0;

  const dfs = (node) => {
    visited[node] = true;
    for (let i = 0; i < n; i += 1) {
      if (!visited[i] && computers[node][i]) {
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i += 1) {
    if (!visited[i]) {
      dfs(i);
      networks += 1;
    }
  }

  return networks;
}
