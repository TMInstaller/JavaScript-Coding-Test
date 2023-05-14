function solution(arr) {
  let answer = [];
  let arrReverse = [...arr];
  arrReverse.reverse();
  let count = 0;
  // 정상 2 index, reverse 2 index 구하기
  answer = arr.slice(arr.indexOf(2), arr.length - arrReverse.indexOf(2));
  if (arr.indexOf(2) === -1) {
    answer = [-1];
  }
  return answer;
}
