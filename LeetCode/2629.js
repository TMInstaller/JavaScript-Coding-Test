/**
 * 여러 함수를 입력받아 하나의 합성된 함수를 반환합니다.
 * 합성된 함수는 입력받은 함수들을 오른쪽부터 왼쪽으로 차례대로 적용합니다.
 *
 * @param {Function[]} functions - 합성하려는 함수들의 배열.
 * @return {Function} - 모든 입력 함수가 합성된 단일 함수.
 */
var compose = function (functions) {
  // 함수 배열이 비어있으면, 입력값을 그대로 반환하는 함수를 반환
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }

  // 함수 배열이 비어있지 않은 경우, reduceRight를 사용하여 함수들을 합성
  return functions.reduceRight(function (prevFn, nextFn) {
    // 합성된 함수를 반환
    return function (x) {
      // prevFn을 적용한 결과에 nextFn을 적용
      return nextFn(prevFn(x));
    };
  });
};

/**
 * 사용 예:
 * const fn = compose([x => x + 1, x => 2 * x]);
 * fn(4); // 결과는 9
 *
 * 설명:
 * fn(4)는 먼저 x => 2 * x 함수에 4를 적용하고 (결과는 8),
 * 그 결과에 x => x + 1 함수를 적용합니다 (결과는 9).
 */
