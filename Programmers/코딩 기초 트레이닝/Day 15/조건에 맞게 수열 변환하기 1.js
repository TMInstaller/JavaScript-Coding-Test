function solution(arr) {
  let ans = [];
  for (let a of arr) {
    if (a >= 50 && a % 2 === 0) {
      ans.push(a / 2);
    } else if (a < 50 && a % 2 === 1) {
      ans.push(a * 2);
    } else {
      ans.push(a);
    }
  }
  return ans;
}
// 스프레드 연산자와 forEach 사용 시 시간초과
