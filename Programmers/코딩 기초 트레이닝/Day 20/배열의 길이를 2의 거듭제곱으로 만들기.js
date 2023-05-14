function solution(arr) {
  if (arr.length === 0) {
    return [];
  }

  let answer = [...arr];
  let num = 1;
  while (arr.length > num) {
    num *= 2;
  }

  if (num > arr.length) {
    for (let i = 0; i < num - arr.length; i++) {
      answer.push(0);
    }
  }

  return answer;
}
