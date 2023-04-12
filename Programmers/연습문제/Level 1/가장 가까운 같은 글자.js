function solution(s) {
  let result = [];
  let pos = {};

  // result 배열에 값을 추가하는 함수
  function addResult(value) {
    result.push(value);
  }

  // pos 객체를 업데이트하는 함수
  function updatePos(char) {
    // pos 객체의 모든 속성의 값을 1씩 증가시킴
    for (let key in pos) {
      if (pos.hasOwnProperty(key)) {
        pos[key] += 1;
      }
    }
    // 새로운 문자가 나타나면, 해당 문자의 값을 1로 설정함
    pos[char] = 1;
  }

  // 문자열을 순회하면서 result 배열과 pos 객체를 갱신함
  for (let i = 0; i < s.length; i++) {
    if (!pos[s[i]]) {
      // 이미 등장한 문자가 아니면, -1을 result 배열에 추가하고 pos 객체를 업데이트함
      addResult(-1);
      updatePos(s[i]);
    } else {
      // 이미 등장한 문자이면, 해당 문자의 값을 result 배열에 추가하고 pos 객체를 업데이트함
      addResult(pos[s[i]]);
      updatePos(s[i]);
    }
  }

  return result;
}
