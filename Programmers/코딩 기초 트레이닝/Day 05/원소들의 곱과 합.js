function solution(num_list) {
  let square = 0;
  let times = 1;
  for (n of num_list) {
    square += n;
    times *= n;
  }
  if (square ** 2 > times) return 1;
  else return 0;
}
