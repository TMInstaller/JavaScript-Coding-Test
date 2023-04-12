function solution(a, b) {
  let result = "";
  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const dayInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayLeft = 0;
  for (let i = 0; i < a - 1; i++) {
    dayLeft += dayInMonth[i];
  }
  dayLeft += b - 1;
  return day[dayLeft % 7];
}
