function solution(lottos, win_nums) {
  let sameNumCount = 0;
  let zeroCount = 0;

  lottos.forEach((l) => {
    if (win_nums.includes(l)) {
      sameNumCount++;
    } else if (l === 0) {
      zeroCount++;
    }
  });

  const rank = (matchedCount) => Math.min(7 - matchedCount, 6);

  const highestRank = rank(sameNumCount + zeroCount);
  const lowestRank = rank(sameNumCount);

  return [highestRank, lowestRank];
}
