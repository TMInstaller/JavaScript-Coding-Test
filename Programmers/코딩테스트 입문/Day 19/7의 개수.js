const solution = (array) =>
  array
    .join("")
    .split("")
    .filter((a) => a === "7").length;
