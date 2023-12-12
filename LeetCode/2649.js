/**
 * 중첩 배열에 대해 중위 순회를 수행하는 제너레이터 함수입니다.
 *
 * @param {Array} arr - 중첩 배열을 포함할 수 있는 배열.
 * @return {Generator} - 배열의 모든 요소를 중위 순회 순서로 반환하는 제너레이터.
 */
var inorderTraversal = function* (arr) {
  // 중첩 배열을 순회하는 도우미 제너레이터 함수
  function* traverse(node) {
    // node가 배열인 경우, 각 서브 배열에 대해 재귀적으로 traverse 호출
    if (Array.isArray(node)) {
      for (let subArray of node) {
        yield* traverse(subArray);
      }
    } else {
      // 배열이 아닌 요소는 그대로 yield(반환)
      yield node;
    }
  }

  // 주어진 배열에 대해 중위 순회 시작
  yield* traverse(arr);
};

/**
 * 사용 예:
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 *
 * 이 코드는 [1, [2, 3]]과 같은 중첩 배열을 입력으로 받아,
 * 1, 2, 3 순서로 각 요소를 하나씩 반환하는 제너레이터를 생성합니다.
 * gen.next()를 호출할 때마다 배열의 다음 요소를 반환합니다.
 */
