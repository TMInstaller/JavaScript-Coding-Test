function compareTriplets(a, b) {
  let answer = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      answer[0] += 1;
    } else if (a[i] < b[i]) {
      answer[1] += 1;
    }
  }
  return answer;
}
