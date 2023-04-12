function solution(n) {
  // 각 숫자가 소수인지 아닌지를 저장하는 배열
  let primes = Array(n + 1).fill(true);
  primes[0] = false;
  primes[1] = false;

  // 에라토스테네스의 체 알고리즘을 사용하여 소수를 찾음
  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      // i의 배수를 모두 소수가 아니라고 표시함
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  // primes 배열에서 소수로 표시된 숫자를 찾아 개수를 세어 반환함
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (primes[i]) {
      count++;
    }
  }

  return count;
}
