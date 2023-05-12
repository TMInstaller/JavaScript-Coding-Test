function solution(strArr) {
  let ans = [];
  for (let i = 0; i < strArr.length; i++) {
    ans = [
      ...ans,
      i % 2 === 0 ? strArr[i].toLowerCase() : strArr[i].toUpperCase(),
    ];
  }
  return ans;
}
