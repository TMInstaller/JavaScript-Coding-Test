function solution(n, results) {
  let answer = 0; // 정확하게 순위를 매길 수 있는 선수의 수를 저장하는 변수

  // n+1 크기의 2차원 배열 생성. 모든 값은 false로 초기화
  let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));

  // results 배열을 순회하며 승리한 선수와 패배한 선수를 그래프에 표시
  for (let [a, b] of results) {
    graph[a][b] = true; // a 선수가 b 선수를 이긴 경우를 그래프에 표시
  }

  // 플로이드-워셜 알고리즘을 이용해 간접적인 승리 관계까지 그래프에 표시
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][k] && graph[k][j]) {
          graph[i][j] = true; // i 선수가 k 선수를 이기고, k 선수가 j 선수를 이기면, i 선수가 j 선수를 이긴 것으로 표시
        }
      }
    }
  }

  // 각 선수에 대해 그 선수와 승패 관계를 가진 다른 선수의 수를 센다.
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= n; j++) {
      if (graph[i][j] || graph[j][i]) {
        // i 선수가 j 선수를 이기거나, j 선수가 i 선수를 이긴 경우를 카운트
        count++;
      }
    }
    // 만약 그 선수와 승패 관계를 가진 다른 선수의 수가 n-1이면, 그 선수의 순위를 정확하게 알 수 있으므로 답을 1 증가시킨다.
    if (count === n - 1) {
      answer++;
    }
  }
  return answer; // 정확하게 순위를 매길 수 있는 선수의 수를 반환
}
