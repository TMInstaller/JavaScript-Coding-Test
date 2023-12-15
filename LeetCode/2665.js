/**
 * 이 함수는 초기 카운트 값을 설정하고, 카운트를 증가, 감소, 초기화할 수 있는 메서드를 제공하는 카운터 객체를 생성합니다.
 * @param {integer} init - 카운터의 초기 값
 * @return {object} - increment, decrement, reset 메서드를 포함하는 객체
 */
var createCounter = function (init) {
  // 현재 카운트 값을 저장할 변수, 초기값은 함수 호출 시 전달된 init 값으로 설정
  let presentCount = init;

  // 객체 반환: 세 개의 메서드(increment, decrement, reset)를 포함
  return {
    // increment 메서드: 현재 카운트 값을 1 증가시키고, 새로운 값을 반환
    increment: () => ++presentCount,
    // decrement 메서드: 현재 카운트 값을 1 감소시키고, 새로운 값을 반환
    decrement: () => --presentCount,
    // reset 메서드: 현재 카운트 값을 초기값(init)으로 재설정
    reset: () => (presentCount = init),
  };
};

/**
 * 사용 예시
 */
// createCounter 함수를 호출하여 초기값이 5인 카운터 객체 생성
const counter = createCounter(5);
counter.increment(); // 카운터 증가: 반환값 6
counter.reset(); // 카운터 초기화: 반환값 5
counter.decrement(); // 카운터 감소: 반환값 4
