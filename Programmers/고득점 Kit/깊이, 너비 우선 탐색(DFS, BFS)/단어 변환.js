function solution(begin, target, words) {
  // BFS
  function isConvertible(word1, word2) {
    // 두 단어가 변환 가능한지 확인
    let diffCount = 0; // 다른 문자 개수
    for (let i = 0; i < word1.length; i++) {
      // 두 단어의 각 문자를 비교
      if (word1[i] !== word2[i]) diffCount++; // 다른 문자가 있으면 diffCount 증가
      if (diffCount > 1) return false; // 다른 문자가 2개 이상이면 변환 불가능
    }
    return diffCount === 1; // 다른 문자가 1개면 변환 가능
  }

  if (!words.includes(target)) return 0; // target이 words에 없으면 변환 불가능

  const visited = Array(words.length).fill(false); // 방문 여부
  let queue = [[begin, 0]]; // BFS를 위한 큐

  while (queue.length > 0) {
    // BFS
    const [currentWord, step] = queue.shift(); // 큐에서 단어와 변환 횟수를 가져옴

    for (let i = 0; i < words.length; i++) {
      // words를 순회하며
      if (!visited[i] && isConvertible(currentWord, words[i])) {
        // 방문하지 않았고 변환 가능하면
        if (words[i] === target) return step + 1; // target이면 변환 횟수 반환
        visited[i] = true; // 방문 여부를 true로 변경
        queue.push([words[i], step + 1]); // 큐에 단어와 변환 횟수를 추가
      }
    }
  }

  return 0; // 변환 불가능하면 0 반환
}
