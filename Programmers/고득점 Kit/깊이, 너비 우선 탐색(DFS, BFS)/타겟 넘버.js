const solution = (numbers, target) => {
  let answer = 0;
  const len = numbers.length;

  const dfs = (count, sum) => {
    if (count === len) {
      if (target === sum) {
        answer += 1;
      }
      return;
    }

    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  };

  dfs(0, 0);

  return answer;
};
