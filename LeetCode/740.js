var deleteAndEarn = function (nums) {
  // count 객체를 생성하여 각 숫자가 배열에 몇 번 등장하는지 그리고 그 숫자를 선택했을 때 얻을 수 있는 점수를 계산합니다.
  const count = {};
  for (const num of nums) {
    // 각 숫자(num)에 대해 count[num]에 num 값을 더합니다.
    // 이는 num 숫자를 선택할 때 얻을 수 있는 총 점수를 의미합니다.
    count[num] = (count[num] || 0) + num;
  }

  // nums 배열에서 가장 큰 숫자를 찾습니다.
  // 이 값은 동적 프로그래밍 배열의 크기를 결정하는 데 사용됩니다.
  const maxNum = Math.max(...nums);

  // 동적 프로그래밍을 위한 배열 dp를 생성합니다.
  // 이 배열의 각 요소는 해당 인덱스까지의 최대 점수를 저장합니다.
  const dp = new Array(maxNum + 1).fill(0);

  // 첫 번째 숫자에 대한 처리입니다.
  // count[1]이 undefined이면 0을 사용합니다.
  dp[1] = count[1] || 0;

  // 배열의 각 요소에 대해 반복합니다.
  for (let i = 2; i <= maxNum; i++) {
    // dp[i]는 두 가지 옵션 중 최대값을 선택합니다:
    // 1) 이전 숫자(i-1)까지의 최대 점수(dp[i - 1])
    // 2) 현재 숫자(i)로 얻을 수 있는 점수(count[i])와 i-2까지의 최대 점수(dp[i-2])의 합
    // 여기서 count[i]가 undefined인 경우를 고려하여 0을 사용합니다.
    dp[i] = Math.max(dp[i - 1], (count[i] || 0) + (dp[i - 2] || 0));
  }

  // 최종적으로 가장 큰 숫자까지 고려했을 때의 최대 점수를 반환합니다.
  return dp[maxNum];
};
