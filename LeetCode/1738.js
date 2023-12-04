/**
 * 2차원 행렬에서 각 좌표에 대해 특정한 XOR 값을 계산하고, 이 중 k번째로 큰 값을 찾습니다.
 *
 * @param {number[][]} matrix - 음이 아닌 정수로 이루어진 2차원 행렬.
 * @param {number} k - 찾고자 하는 순서(1-indexed).
 * @return {number} - k번째로 큰 XOR 값.
 */
var kthLargestValue = function (matrix, k) {
  const m = matrix.length; // 행의 개수
  const n = matrix[0].length; // 열의 개수
  let answer = []; // 계산된 XOR 값을 저장할 배열

  // 행렬의 모든 좌표에 대해 반복
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      // (0,0)이 아닌 좌표에 대해 XOR 값을 계산
      if (!(i === 0 && j === 0)) {
        matrix[i][j] =
          matrix[i][j] ^ // 현재 좌표의 값
          (matrix[i - 1]?.[j] || 0) ^ // 위쪽 좌표의 누적 XOR 값
          (matrix[i][j - 1] || 0) ^ // 왼쪽 좌표의 누적 XOR 값
          (matrix[i - 1]?.[j - 1] || 0); // 대각선 위 좌표의 누적 XOR 값
      }
      // 계산된 XOR 값을 answer 배열에 추가
      answer.push(matrix[i][j]);
    }
  }

  // answer 배열을 내림차순으로 정렬
  answer.sort((a, b) => b - a);

  // k번째로 큰 XOR 값을 반환하거나, 값이 없으면 0을 반환
  return answer[k - 1] || 0;
};
