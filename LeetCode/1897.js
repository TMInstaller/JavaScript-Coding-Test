/**
 * 주어진 문자열 배열의 모든 문자들을 균등하게 나눌 수 있는지 여부를 판단합니다.
 *
 * @param {string[]} words - 판단할 문자열 배열.
 * @return {boolean} - 모든 문자를 균등하게 나눌 수 있으면 true, 그렇지 않으면 false.
 */
var makeEqual = function (words) {
  // 문자의 빈도수를 저장할 해시맵
  const hashmap = new Map();
  let sum = 0; // 문자열의 총 길이

  // 모든 문자열에 대해 반복
  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    sum += word.length; // 총 길이 누적

    // 각 문자열의 문자에 대해 반복
    for (let j = 0; j < word.length; j += 1) {
      const char = word[j];

      // 문자의 빈도수를 해시맵에 저장 또는 업데이트
      if (hashmap.has(char)) {
        hashmap.set(char, hashmap.get(char) + 1);
      } else {
        hashmap.set(char, 1);
      }
    }
  }

  // 총 문자 길이가 문자열의 수로 나누어 떨어지지 않으면 균등 분배 불가능
  if (sum % words.length) return false;

  // 각 문자의 빈도수가 문자열의 수로 나누어 떨어지는지 확인
  let output = true;
  hashmap.forEach((value) => {
    if (value % words.length) output = false;
  });

  return output;
};
