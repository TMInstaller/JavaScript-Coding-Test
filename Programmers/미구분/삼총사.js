function solution(number) {
  let ans = [];
  for (let i = 0; i < number.length - 2; i += 1) {
    for (let j = i + 1; j < number.length - 1; j += 1) {
      for (let k = j + 1; k < number.length; k += 1) {
        ans.push(number[i] + number[j] + number[k]);
      }
    }
  }
  return ans.filter((res) => res === 0).length;
}
