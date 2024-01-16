/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
  let p = pattern.split("");
  s = s.split(" ");
  if (s.length !== p.length) return false;
  let sObj = new Map();
  let pObj = new Map();
  // p =  a   b   b   a
  // s = dog cat cat dog
  for (let i = 0; i < p.length; i += 1) {
    if (sObj.has(s[i]) && sObj.get(s[i]) !== p[i]) {
      return false;
    } else {
      sObj.set(s[i], p[i]);
    }
    if (pObj.get(p[i]) && pObj.get(p[i]) !== s[i]) {
      return false;
    } else {
      pObj.set(p[i], s[i]);
    }
  }

  return true;
};
