/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const memo = new Array(s.length).fill(-1);

  const helper = (index) => {
    if (index === s.length) {
      return 1;
    }

    if (s[index] === "0") {
      return 0;
    }

    if (memo[index] !== -1) {
      return memo[index];
    }

    let ways = helper(index + 1);

    if (index < s.length - 1 && parseInt(s.substring(index, index + 2)) <= 26) {
      ways += helper(index + 2);
    }

    memo[index] = ways;
    return ways;
  };

  return helper(0);
};
