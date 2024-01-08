/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const trimSArr = s.trim().split(" ");
  let result = [];
  for (let i = 0; i < trimSArr.length; i += 1) {
    if (trimSArr[i] === "") {
      continue;
    } else {
      result.push(trimSArr[i]);
    }
  }
  return result.reverse().join(" ");
};
