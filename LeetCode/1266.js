/**
 * 주어진 점들의 배열을 순회하며 각 점 사이를 이동하는 데 필요한 최소 시간을 계산합니다.
 * 이동은 수평, 수직, 대각선 방향으로 가능하며, 각 이동에는 1단위 시간이 소요됩니다.
 *
 * @param {number[][]} points - 이동해야 할 점들의 배열. 각 점은 [x, y] 형태의 좌표를 가집니다.
 * @return {number} - 모든 점을 방문하는 데 필요한 최소 시간.
 */
const minTimeToVisitAllPoints = function (points) {
  let count = 0; // 총 이동 시간을 저장할 변수

  // 배열의 각 점을 순회
  for (let i = 1; i < points.length; i++) {
    // 현재 점과 이전 점 사이의 x 좌표와 y 좌표의 차이를 계산
    const dx = Math.abs(points[i][0] - points[i - 1][0]);
    const dy = Math.abs(points[i][1] - points[i - 1][1]);

    // 두 점 사이의 이동 시간은 x와 y 좌표 차이 중 더 큰 값과 같습니다.
    // 이는 대각선으로 이동 후 필요한 경우 수직 또는 수평으로 추가 이동함을 의미합니다.
    count += Math.max(dx, dy);
  }

  return count; // 총 이동 시간 반환
};
