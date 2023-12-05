/**
 * 주어진 행의 수에 따라 파스칼의 삼각형을 생성합니다.
 *
 * @param {number} numRows - 생성할 파스칼 삼각형의 행 수.
 * @return {number[][]} - 생성된 파스칼 삼각형.
 */
var generate = function (numRows) {
  // 파스칼 삼각형을 저장할 배열
  let arr = [];

  // 각 행에 대한 배열을 생성하고 0으로 초기화
  for (let i = 1; i <= numRows; i += 1) {
    arr.push(new Array(i).fill(0));
  }

  // 첫 번째 행의 첫 번째 요소를 1로 설정
  arr[0][0] = 1;

  // 나머지 행을 계산
  for (let i = 0; i < numRows - 1; i += 1) {
    for (let j = 0; j <= i; j += 1) {
      // 현재 행의 요소를 다음 행의 왼쪽과 오른쪽 요소에 더함
      arr[i + 1][j] = arr[i + 1][j] + arr[i][j];
      arr[i + 1][j + 1] = arr[i + 1][j + 1] + arr[i][j];
    }
  }

  // 계산된 파스칼 삼각형 반환
  return arr;
};

/**
 * 이 함수는 주어진 행 수에 따라 파스칼 삼각형을 생성합니다.
 * 파스칼 삼각형에서, 각 행의 첫 번째와 마지막 요소는 항상 1입니다.
 * 나머지 요소는 바로 위 행의 왼쪽과 오른쪽 요소의 합입니다.
 */
