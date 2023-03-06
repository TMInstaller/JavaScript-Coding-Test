function solution(sides) {
  let answer = 1;
  const side = sides.sort((a, b) => a - b);
  if (side[2] >= side[0] + side[1]) {
    answer = 2;
  }
  return answer;
}
