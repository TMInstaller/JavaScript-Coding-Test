const solution = (keymap, targets) => {
  let answer = []; // 결과 값을 담을 배열
  let obj = {}; // keymap의 각 문자의 최소 index 값을 저장할 객체

  // 사용자가 누를 자판의 종류를 확인하기 위해 배열을 합치고 중복을 제거
  const targetSet = [...new Set(targets.join(""))];

  // 종복을 제거한 배열을 순회
  // ex) ['a', 'b', 'c']
  targetSet.map((v) => {
    // keymap을 순회하면서 keymap의 각 단어들의 최소 index 값을 obj에 넣습니다
    // ["abacd", "bcefd"]
    keymap.map((value) => {
      // keymap의 요소인 문자열 안에 사용자가 누르는 단어가 없다면 다음 요소 진행
      // ex ) 'abacd'.includes('a')
      if (!value.includes(v)) return;
      // 사용자가 누르는 단어의 인덱스 값을 구합니다
      const index = value.indexOf(v);
      // 만약 해당 단어가 obj안에 없다면 obj[v] = index를 추가
      // ex) obj = { a(사용자가 누르는 단어) : 0(keymap의 현제 요소의 index값) }
      if (!obj.hasOwnProperty(v)) return (obj[v] = index);
      if (obj.hasOwnProperty(v))
        // 만약 해당 단어가 obj 안에 있다면 obj 안에 있는 값과 keymap 의 현제 index 값을
        // 비교해서 더 작은 값으로 교체합니다.
        return (obj[v] = obj[v] > index ? index : obj[v]);
    });
  });

  // obj에 각 단어들의 최소 인덱스 값을 넣었으니 지금부터
  // 사용자가 키를 누르는 문자 배열인 targets를 순회
  targets.map((v, i) => {
    // 문자열을 순회
    for (let a = 0; a < v.length; a++) {
      // 만약 사용자가 누르는 단어가 obj 안에 없다면 answer의 i 번째 요소는 -1
      if (!obj.hasOwnProperty(v[a])) return (answer[i] = -1);
      // 사용자가 누르는 단어가 obj 안에 있다면 answer을 초기화 후
      // answer의 i 번째 요소에 obj[v[a]] + 1을 더해줍니다.
      // ex )  obj = {'a' : 1, 'b' : 2, 'c': 3},  v = abc, v[a] = a
      if (obj.hasOwnProperty(v[a]) && !answer[i]) answer[i] = 0;
      answer[i] += obj[v[a]] + 1;
    }
  });
  return answer;
};
