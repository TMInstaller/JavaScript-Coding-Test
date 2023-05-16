function solution(n, computers) {
  let answer = 0; // 네트워크의 개수
  const visited = Array(n).fill(false); // 방문 여부를 저장하는 배열
  const queue = []; // BFS를 위한 큐
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // 방문하지 않은 노드라면
      answer++; // 네트워크의 개수를 1 증가시킨다.
      visited[i] = true; // 방문 여부를 true로 변경한다.
      queue.push(i); // 큐에 현재 노드를 추가한다.
      while (queue.length > 0) {
        // 큐가 빌 때까지 반복한다.
        const node = queue.shift(); // 큐에서 노드를 꺼낸다.
        for (let j = 0; j < n; j++) {
          // 노드와 연결된 노드를 찾는다.
          if (computers[node][j] === 1 && !visited[j]) {
            // 연결된 노드이고 방문하지 않았다면
            visited[j] = true; // 방문 여부를 true로 변경한다.
            queue.push(j); // 큐에 현재 노드를 추가한다.
          }
        }
      }
    }
  }
  return answer;
}
