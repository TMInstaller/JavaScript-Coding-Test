function solution(numbers, direction) {
  let answer = [];
  let fnum = numbers[0];
  let mnum = numbers.slice(1, -1);
  let lnum = numbers[numbers.length - 1];
  console.log(fnum, mnum, lnum);
  if (direction === "right") {
    answer = [lnum, fnum, ...mnum];
  } else {
    answer = [...mnum, lnum, fnum];
  }
  return answer;
}
