function solution(number, limit, power) {
  let answer = 1;

  // 에라토스테네스의 체를 이용하여 소수 구하기
  function sieveOfEratosthenes(num) {
    const primes = [];
    const isPrime = Array(num + 1).fill(true);

    // 0과 1은 소수가 아니므로 false로 설정
    isPrime[0] = isPrime[1] = false;

    // 2부터 시작하여 num 범위 내의 소수를 구함
    for (let i = 2; i * i <= num; i++) {
      if (isPrime[i]) {
        primes.push(i);

        // 소수의 배수들을 소수가 아닌 것으로 표시
        for (let j = i * i; j <= num; j += i) {
          isPrime[j] = false;
        }
      }
    }
    return primes;
  }

  // 주어진 범위 내의 모든 소수를 구함
  const primes = sieveOfEratosthenes(number);

  // 각 숫자에 대해 소인수 분해를 수행하고 약수의 개수를 구함
  for (let i = 2; i <= number; i++) {
    let count = 1;
    let num = i;

    // 소수 목록을 순회하며 소인수 분해를 수행
    for (const prime of primes) {
      // 소수의 제곱이 num보다 클 경우 루프를 빠져나옴
      if (prime * prime > num) {
        break;
      }

      let exponent = 0;
      // num이 소수로 나누어 떨어질 때까지 반복
      while (num % prime === 0) {
        exponent++;
        num /= prime;
      }

      // 지수가 0이 아니라면 약수의 개수를 업데이트
      if (exponent !== 0) {
        count *= exponent + 1;
      }
    }

    // 소인수 분해 후 남은 숫자가 1이 아니라면
    // 마지막 소인수에 대해 약수의 개수를 업데이트
    if (num !== 1) {
      count *= 2;
    }

    // 약수의 개수가 limit을 초과하면 power 값으로 치환
    count = count > limit ? power : count;
    // 누적 약수 개수를 answer에 더함
    answer += count;
  }
  return answer;
}
