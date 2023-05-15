function solution(k, tangerine) {
  // 각 크기의 귤의 개수를 세서 저장
  let count = {};
  for (let i = 0; i < tangerine.length; i++) {
    let size = tangerine[i];
    count[size] = count[size] === undefined ? 1 : count[size] + 1;
  }

  // 크기별 귤의 개수를 배열로 변환하여 내림차순으로 정렬
  let countArray = Object.values(count).sort((a, b) => b - a);

  // 가장 많이 등장하는 크기의 귤부터 담기 시작
  let i = 0;
  while (k > 0 && i < countArray.length) {
    k -= countArray[i];
    i++;
  }

  // 남은 귤의 개수가 k보다 작아지면 종료
  // 크기가 서로 다른 종류의 귤의 최소 개수 반환
  return i;
}
