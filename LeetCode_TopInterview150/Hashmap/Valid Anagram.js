/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const charMap = Array(26).fill(0);

  for (let i = 0; i < s.length; i += 1) {
    charMap[s.charCodeAt(i) - "a".charCodeAt(0)] += 1;
    charMap[t.charCodeAt(i) - "a".charCodeAt(0)] -= 1;
  }

  return charMap.every((count) => count === 0);
};
