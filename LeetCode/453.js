/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let minNum = Math.min(...nums);
  let moves = 0;
  for (let num of nums) {
    moves += num - minNum; // 각 요소를 최솟값으로 만들기 위한 이동 횟수 누적
  }
  return moves;
};
