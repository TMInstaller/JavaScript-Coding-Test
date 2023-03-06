const solution = (num_list, n) => {
  let arr = [];
  for (i = 0; i < num_list.length / n; i++)
    arr = [...arr, num_list.slice(n * i, n * i + n)];
  return arr;
};
