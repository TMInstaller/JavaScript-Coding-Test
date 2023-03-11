function solution(A, B) {
  let str = A.split("");
  let count = 0;
  while (count <= A.length) {
    if (str.join("") === B) {
      return count;
    } else {
      count += 1;
    }
    let s = str.pop();
    str.unshift(s);
  }
  return -1;
}
