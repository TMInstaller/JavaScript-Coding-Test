function solution(n) {
  const nums = Array.from({ length: 200 }, (_, i) => i + 1);
  const noThreeNums = nums.filter(
    (m) => m % 3 !== 0 && !m.toString().includes("3")
  );

  return noThreeNums[n - 1];
}
