const solution = (order) =>
  [...(order + "")].filter((a) => ["3", "6", "9"].includes(a)).length;
