/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
  const nums = [0];
  const signs = [];
  let num = 0;
  let sign = 1;
  for (let char of `(${s})`) {
    switch (char) {
      case " ":
        continue;
      case "(": {
        signs.push(sign);
        nums.push(0);
        sign = 1;
        break;
      }
      case "+":
      case "-":
      case ")": {
        nums.push(num * sign + nums.pop());
        num = 0;
        if (char === "+") sign = 1;
        if (char === "-") sign = -1;
        if (char === ")") nums.push(nums.pop() * signs.pop() + nums.pop());
        break;
      }
      default: {
        num += char;
      }
    }
  }
  return nums.pop();
};
