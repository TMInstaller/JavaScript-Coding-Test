function solution(s) {
  let count = [0, 0];
  for (str of s) {
    if (str === "p" || str === "P") {
      count[0] += 1;
    } else if (str === "y" || str === "Y") {
      count[1] += 1;
    }
  }

  return count[0] === count[1];
}
