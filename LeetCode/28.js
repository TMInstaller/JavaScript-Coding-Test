/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let str = "";
    for (let j = i; j < i + needle.length; j++) {
      str += haystack[j];
    }
    if (str == needle) {
      return i;
    }
  }
  return -1;
};
