function solution(k, score) {
  let lowList = [];
  let nowList = [];
  score.forEach((s) => {
    if (nowList.length < k) {
      nowList.push(s);
      lowList.push(Math.min(...nowList));
      nowList.sort((a, b) => a - b);
    } else {
      if (s > Math.min(...nowList)) {
        nowList.shift();
        nowList.push(s);
      }
      lowList.push(Math.min(...nowList));
      nowList.sort((a, b) => a - b);
    }
  });
  return lowList;
}
