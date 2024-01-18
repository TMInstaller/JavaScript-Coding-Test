/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  const OPERATORS = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };
  const stack = [];

  const doOperation = (char) => {
    const second = stack.pop();
    const first = stack.pop();
    const value = OPERATORS[char](first, second);
    stack.push(value);
  };

  for (const token of tokens) {
    if (token in OPERATORS) {
      doOperation(token);
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
};
