/**
 * 객체 또는 배열이 비어 있는지 여부를 확인합니다.
 *
 * @param {Object|Array} obj - 검사하고자 하는 객체 또는 배열.
 * @return {boolean} - 객체 또는 배열이 비어 있으면 true, 그렇지 않으면 false를 반환합니다.
 */
var isEmpty = function (obj) {
  // obj가 객체이고 배열이 아닌 경우
  if (typeof obj === "object" && !Array.isArray(obj)) {
    // 객체의 키가 없는 경우 true, 즉 객체가 비어 있는 경우
    return Object.keys(obj).length === 0;
  }

  // obj가 배열인 경우
  if (Array.isArray(obj)) {
    // 배열의 길이가 0이면 true, 즉 배열이 비어 있는 경우
    return obj.length === 0;
  }

  // obj가 객체도 배열도 아닌 경우, 항상 false를 반환
  return false;
};
