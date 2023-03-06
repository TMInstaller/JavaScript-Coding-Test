function solution(array) {
  const answer = Math.floor(array.length / 2);
  const arr_sorted = array.sort((a, b) => a - b);
  return arr_sorted[answer];
}
