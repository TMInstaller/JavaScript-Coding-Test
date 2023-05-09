function solution(n, m, section) {
  let count = (location = 0);

  while (section.length >= 1) {
    count++;
    location = section[0] - 1;

    for (let i = location; i <= location + m; i++) {
      i === section[0] ? section.shift() : null;
    }
  }

  return count;
}
