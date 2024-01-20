/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
  const wordSet = new Set(wordList);
  let queue = [beginWord];
  let steps = 1;

  while (queue.length) {
    const next = [];

    for (let word of queue) {
      if (word === endWord) return steps;

      for (let i = 0; i < word.length; i += 1) {
        for (let j = 0; j < 26; j += 1) {
          const newWord =
            word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);
          if (wordSet.has(newWord)) {
            next.push(newWord);
            wordSet.delete(newWord);
          }
        }
      }
    }
    queue = next;
    steps += 1;
  }
  return 0;
};
