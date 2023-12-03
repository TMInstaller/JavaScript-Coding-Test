/**
 * @param {string[]} words - 검사할 단어들의 배열
 * @param {string} chars - 사용 가능한 문자들을 포함하는 문자열
 * @return {number} - `chars`에 포함된 문자만 사용하여 만들 수 있는 `words`의 단어들의 길이의 합
 */
const countCharacters = function (words, chars) {
  // chars 문자열의 각 문자를 키로 하고, 해당 문자의 수를 값으로 하는 객체 생성
  const charsObject = {};

  // chars의 각 문자에 대해 반복
  for (const char of chars) {
    // charsObject에 문자가 이미 존재하면 그 수를 1 증가시키고, 없으면 새로 1로 설정
    charsObject[char] = 1 + (charsObject[char] || 0);
  }

  // 결과를 저장할 변수 초기화
  let result = 0;

  // words의 각 단어에 대해 반복
  for (const word of words) {
    // charsObject의 복사본 생성. 각 단어 검사 시마다 원본 charsObject가 변하지 않도록 함
    const copyObject = { ...charsObject };

    // 현재 단어의 각 문자에 대해 반복
    for (const dividedWord of word) {
      // 만약 현재 문자가 copyObject에 있고, 그 수가 0이 아니라면
      if (dividedWord in copyObject && copyObject[dividedWord] !== 0) {
        // 해당 문자의 수를 1 감소
        copyObject[dividedWord] -= 1;
      } else {
        // 현재 문자가 copyObject에 없거나 수가 0이라면, 현재 단어의 길이만큼 결과에서 빼고 반복 중단
        result -= word.length;
        break;
      }
    }

    // 모든 문자가 조건에 맞으면 단어의 길이를 결과에 더함
    result += word.length;
  }

  // 최종 결과 반환
  return result;
};
