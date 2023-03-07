function solution(numbers) {
  let answer = 0;
  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  num.forEach((nums, index) => {
    numbers = numbers.split(nums).join(index);
  });
  return Number(numbers);
}
