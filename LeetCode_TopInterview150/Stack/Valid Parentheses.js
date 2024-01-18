/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  let stack = [];

  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (!stack.length) return false;
      let char = stack.pop();
      if (char !== pairs[s[i]]) return false;
    }
  }

  return stack.length === 0;
};
