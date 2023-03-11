const solution = (num, total) =>
  Array.from(
    { length: num },
    (_, i) => i + Math.ceil(total / num - Math.floor(num / 2))
  );
