// 2021 카카오 채용연계형 인턴십
function solution(s) {
  const nums = [
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
  for (let i = 0; i < nums.length; i++) {
    let regex = new RegExp(nums[i], "g");
    s = s.replace(regex, i);
  }
  return parseInt(s);
}
