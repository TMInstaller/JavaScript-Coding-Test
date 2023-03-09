function solution(dots) {
  let answer = 0;

  function cal(a, b, c, d) {
    let abDiff, cdDiff;

    abDiff = (b[1] - a[1]) / (b[0] - a[0]);
    cdDiff = (d[1] - c[1]) / (d[0] - c[0]);

    if (abDiff === cdDiff) {
      answer = 1;
    }
  }

  cal(dots[0], dots[1], dots[2], dots[3]);
  cal(dots[0], dots[2], dots[1], dots[3]);
  cal(dots[0], dots[3], dots[1], dots[2]);

  return answer === 1 ? 1 : 0;
}
