/**
 * @param {number[][]} points
 * @return {number}
 */
function findMinArrowShots(points) {
  if (points.length === 0) return 0;

  // 시작점을 기준으로 정렬
  points.sort((a, b) => a[0] - b[0]);

  let count = 1;
  let end = points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= end) {
      // 겹치는 경우, 끝점을 최소값으로 갱신
      end = Math.min(end, points[i][1]);
    } else {
      // 겹치지 않는 경우, 새로운 화살 필요
      count++;
      end = points[i][1];
    }
  }

  return count;
}
