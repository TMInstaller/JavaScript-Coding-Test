function solution(numbers) {
  let answer = 0;
  numbers.forEach((num) => (answer += num));
  return answer / numbers.length;
}
