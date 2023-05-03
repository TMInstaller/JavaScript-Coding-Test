function solution(N, stages) {
  let stageInfo = Array(N).fill(0);
  let users = stages.length;

  // Count the players on each stage
  for (let stage of stages) {
    if (stage !== N + 1) {
      stageInfo[stage - 1]++;
    }
  }

  let result = [];

  for (let i = 0; i < N; i++) {
    let failRate = 0;
    if (users !== 0) {
      failRate = stageInfo[i] / users;
      users -= stageInfo[i];
    }
    result.push({ stage: i + 1, failRate: failRate });
  }

  // Sort the result array in descending order of failRate and map to get the stage number
  result.sort((a, b) => {
    if (a.failRate > b.failRate) {
      return -1;
    } else if (a.failRate < b.failRate) {
      return 1;
    } else {
      return a.stage - b.stage;
    }
  });
  return result.map((item) => item.stage);
}
