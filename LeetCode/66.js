/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let reversed = digits.reverse();
  let trailing = false;
  for (let i = 0; i < reversed.length; i++) {
    let num = 0;
    num = reversed[i] + 1;
    if (num == 10) {
      reversed[i] = 0;
      trailing = true;
    } else {
      reversed[i] = num;
      trailing = false;
      break;
    }
  }
  if (trailing) reversed.push(1);
  return reversed.reverse();
};
