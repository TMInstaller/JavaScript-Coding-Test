/**
 * 괄호 문자열을 올바른 괄호 문자열로 만들기 위해 필요한 최소 스왑 횟수를 계산합니다.
 * 문자열은 '['과 ']' 괄호로만 구성되어 있습니다.
 *
 * @param {string} str - 검사할 괄호 문자열.
 * @return {number} - 올바른 괄호 문자열로 만들기 위한 최소 스왑 횟수.
 */
var minSwaps = function (str) {
  let balance = 0, // 균형 상태를 추적하는 변수
    maxClose = 0; // 닫힌 괄호가 열린 괄호보다 많은 최대 상태를 추적하는 변수

  // 문자열의 각 문자에 대해 반복
  for (let s of str) {
    // 닫힌 괄호인 경우, balance를 증가
    if (s === "]") balance++;
    // 열린 괄호인 경우, balance를 감소
    else balance--;

    // 현재까지의 최대 닫힌 괄호 수를 업데이트
    maxClose = Math.max(maxClose, balance);
  }

  // 올바른 괄호 문자열을 만들기 위한 최소 스왑 횟수 계산
  // maxClose의 절반을 올림한 값이 필요한 최소 스왑 횟수
  return Math.ceil(maxClose / 2);
};

/**
 * 이 함수는 괄호 문자열의 균형을 유지하기 위해 필요한 최소 스왑 횟수를 계산합니다.
 * 괄호 문자열에서 ']'가 '['보다 많은 경우, 균형이 깨집니다.
 * 이러한 경우에 필요한 스왑 횟수는 최대 불균형 상태의 절반을 올림한 값과 같습니다.
 */
