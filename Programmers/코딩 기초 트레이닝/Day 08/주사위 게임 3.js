function solution(a, b, c, d) {
  let numbers = [a, b, c, d];
  let counts = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < numbers.length; i++) {
    counts[numbers[i]]++;
  }

  if (counts.includes(4)) {
    return 1111 * counts.indexOf(4);
  } else if (counts.includes(3)) {
    let p = counts.indexOf(3);
    let q = counts.lastIndexOf(1);
    return Math.pow(10 * p + q, 2);
  } else if (counts.includes(2)) {
    if (counts.lastIndexOf(2) !== counts.indexOf(2)) {
      let p = counts.indexOf(2);
      let q = counts.lastIndexOf(2);
      return (p + q) * Math.abs(p - q);
    } else {
      let p = counts.indexOf(2);
      let q = counts.indexOf(1);
      let r = counts.lastIndexOf(1);
      return q * r;
    }
  } else {
    return Math.min(...numbers);
  }
}
