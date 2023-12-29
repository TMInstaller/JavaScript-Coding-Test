/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length;
  let totalCandies = n;
  let i = 1;

  while (i < n) {
    if (ratings[i] === ratings[i - 1]) {
      i += 1;
      continue;
    }

    let currentPeak = 0;
    while (i < n && ratings[i] > ratings[i - 1]) {
      currentPeak += 1;
      totalCandies += currentPeak;
      i += 1;
    }

    if (i === n) {
      return totalCandies;
    }

    let currentValley = 0;
    while (i < n && ratings[i] < ratings[i - 1]) {
      currentValley += 1;
      totalCandies += currentValley;
      i += 1;
    }

    totalCandies -= Math.min(currentPeak, currentValley);
  }

  return totalCandies;
};
