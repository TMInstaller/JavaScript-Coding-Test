/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  // 여기에 연속 3개로 같은 숫자가 나와있는 수를 담을 예정
  let goodIntegers = [];
  for (let i = 0; i < num.length - 2; i += 1) {
    if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
      goodIntegers.push(`${num[i]}${num[i]}${num[i]}`);
    }
  }
  const maxNumber = Math.max(...goodIntegers);
  if (goodIntegers.length === 0) {
    return "";
  }
  if (maxNumber === 0) {
    return "000";
  }
  return maxNumber.toString();
};
