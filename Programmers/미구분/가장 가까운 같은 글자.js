function solution(s) {
  let alphaMap = new Map();
  let ans = [];
  for (let i = 0; i < s.length; i += 1) {
    if (alphaMap[s[i]] === undefined) {
      alphaMap[s[i]] = i;
      ans.push(-1);
    } else {
      ans.push(i - alphaMap[s[i]]);
      alphaMap[s[i]] = i;
    }
  }
  return ans;
}
