/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  // s를 둘로 나눠서 왼쪽에는 0 개수를 세고, 오른쪽에는 1 개수를 세서
  // 그 둘의 합이 가장 큰 수를 return하라
  let result = [];
  for (let i = 1; i < s.length; i += 1) {
    const left = s.slice(0, i);
    const right = s.slice(i, s.length);
    let zeroCount = 0;
    let oneCount = 0;
    for (const l of left) {
      if (l === "0") {
        zeroCount += 1;
      }
    }
    for (const r of right) {
      if (r === "1") {
        oneCount += 1;
      }
    }
    result.push(zeroCount + oneCount);
  }
  return Math.max(...result);
};
