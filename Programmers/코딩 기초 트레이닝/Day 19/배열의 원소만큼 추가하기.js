function solution(arr) {
  let answer = [];
  arr.forEach((a) => {
    for (let i = 0; i < a; i++) {
      answer = [...answer, a];
    }
  });
  return answer;
}
