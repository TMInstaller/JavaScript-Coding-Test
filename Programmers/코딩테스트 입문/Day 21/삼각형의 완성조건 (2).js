function solution(sides) {
  let answer = 0;
  let tri = sides.sort((a, b) => a - b);
  answer = sides[0] + sides[1] - (sides[1] - sides[0] + 1);
  return answer;
}
