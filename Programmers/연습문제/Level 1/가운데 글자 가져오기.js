const solution = (s) =>
  s.length % 2 === 0
    ? `${s[s.length / 2 - 1]}${s[s.length / 2]}`
    : s[parseInt(s.length / 2)];
