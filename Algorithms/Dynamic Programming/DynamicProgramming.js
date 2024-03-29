// 다이나믹 프로그래밍이란 큰 문제를 작은 문제로 나누어 푸는 알고리즘
// 다이나믹 프로그래밍은 동적 계획법이라고도 부른다.
// 다이나믹 프로그래밍은 문제를 나눌 수 있을 때, 부분 문제로 나누어서 푼다.
// 그리고, 작은 문제들의 답을 모아서 큰 문제를 해결한다.
// 다이나믹 프로그래밍은 문제를 잘게 쪼갤 때, 부분 문제는 중복되어 재활용된다.
// 예를 들어 피보나치 수열을 구하는 문제는 한 번 구한 값은 다시 구하지 않는다.
// 다이나믹 프로그래밍은 Memoization 기법을 사용한다.
// Memoization은 프로그램 실행 시 이전에 계산한 값을 저장하여, 다시 계산하지 않도록 하여 전체 실행 속도를 빠르게 하는 기술이다.
// Memoization은 값을 저장하는 방법이므로 캐싱이라고도 한다.
// 다이나믹 프로그래밍의 구현 방식은 Top-down과 Bottom-up 방식이 있다.
// Top-down은 하향식이라고도 하며, 재귀 함수를 이용하여 큰 문제를 해결하기 위해 작은 문제를 호출한다.
// Bottom-up은 상향식이라고도 하며, 반복문을 이용하여 작은 문제부터 차근차근 답을 도출한다.
// 다이나믹 프로그래밍의 대표적인 예제는 피보나치 수열이다.
// 피보나치 수열은 다음과 같은 점화식으로 정의된다.
// f(n) = f(n-1) + f(n-2), 단 f(1) = 1, f(2) = 1
// 피보나치 수열의 점화식을 재귀 함수로 구현하면 다음과 같다.

function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// 위의 코드는 num이 30 이상이면 수행 시간이 너무 오래 걸린다.
// 이는 중복 계산이 많기 때문이다.
// 그래서 이를 해결하기 위해 Memoization 기법을 사용한다.
// Memoization 기법을 사용한 피보나치 수열의 구현은 다음과 같다.

function fibonacci(num, memo = []) {
  if (num <= 1) return 1;
  if (memo[num]) return memo[num];
  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}

// 위의 코드는 num이 100 이상이어도 수행 시간이 오래 걸리지 않는다.
// 이는 중복 계산을 하지 않기 때문이다.
// 이처럼 다이나믹 프로그래밍은 Memoization 기법을 사용하여 중복 계산을 줄인다.
// Memoization 기법을 사용한 피보나치 수열의 구현은 Top-down 방식이다.
// 다이나믹 프로그래밍의 Bottom-up 방식은 반복문을 이용하여 작은 문제부터 차근차근 답을 도출한다.
// 다이나믹 프로그래밍의 대표적인 예제는 피보나치 수열이다.

function fibonacci(num) {
  const arr = [1, 1];
  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[num];
}

// 위의 코드는 num이 100 이상이어도 수행 시간이 오래 걸리지 않는다.
// 이는 중복 계산을 하지 않기 때문이다.
// 이처럼 다이나믹 프로그래밍은 Memoization 기법을 사용하여 중복 계산을 줄인다.
