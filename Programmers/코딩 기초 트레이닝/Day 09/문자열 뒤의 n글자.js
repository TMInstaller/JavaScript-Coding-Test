const solution = (my_string, n) =>
  my_string
    .split("")
    .splice(my_string.length - n, my_string.length)
    .join("");
