function solution(s, skip, index) {
  // 문자열 s의 알파벳을 index만큼 뒤의 알파벳으로 바꿔준다
  // index 만큼 뒤의 알파벳이 z를 넘어갈 경우에는 다시 a 부터 시작한다
  // skip에 포함되는 알파벳은 s에 포함되지 않는다
  // (skip에 b가 포함되어있다면 a -> c)이런 식으로
  // 그래서 s의 각 알파벳에 대해
  // skip을 제외한 알파벳 배열에서
  // index만큼 뒤로 밀어서
  // result를 출력
  let result = "";
  let alphaList = "abcdefghijklmnopqrstuvwxyz"; // 여기서 skip 문자들을을 빼고 2번 반복
  let inx = 0;
  for (let i = 0; i < skip.length; i++) {
    alphaList = alphaList.replace(skip[i], "");
  }
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let inx = alphaList.indexOf(char);
    let newIndex = (inx + index) % alphaList.length;
    result += alphaList[newIndex];
  }
  return result;
}
