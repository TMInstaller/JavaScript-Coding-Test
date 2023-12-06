/**
 * N×N 크기의 2차원 행렬을 시계 방향으로 90도 회전시킵니다.
 * 회전은 "in-place"로 이루어지며, 추가 메모리를 사용하지 않습니다.
 *
 * @param {number[][]} matrix - 회전시킬 N×N 크기의 2차원 행렬.
 * @return {void} - 반환값 없음. 행렬은 직접 수정됩니다.
 */
var rotate = function (matrix) {
  let n = matrix.length; // 행렬의 크기
  let depth = ~~(n / 2); // 회전시킬 레이어의 수
  // ~~ 는 양수에 대한 빠른 Math.floor()

  // 각 레이어에 대해 반복
  for (let i = 0; i < depth; i++) {
    let len = n - 2 * i - 1; // 현재 레이어에서 회전시킬 요소의 수
    let oop = n - 1 - i; // 반대쪽 끝의 인덱스

    // 레이어 내의 각 요소에 대해 반복
    for (let j = 0; j < len; j++) {
      // 네 모서리 요소의 회전 처리
      let temp = matrix[i][i + j];
      matrix[i][i + j] = matrix[oop - j][i];
      matrix[oop - j][i] = matrix[oop][oop - j];
      matrix[oop][oop - j] = matrix[i + j][oop];
      matrix[i + j][oop] = temp;
    }
  }
};

/**
 * 이 함수는 각 레이어를 독립적으로 회전시키면서, 행렬의 외부에서 내부로 이동합니다.
 * 각 레이어에서, 상단의 행, 오른쪽의 열, 하단의 행, 왼쪽의 열을 회전시킵니다.
 * 이 방법은 추가 메모리를 사용하지 않고 행렬을 직접 수정합니다.
 */
