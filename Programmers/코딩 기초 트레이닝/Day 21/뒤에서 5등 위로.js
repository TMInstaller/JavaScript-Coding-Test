function solution(num_list) {
  num_list.sort((a, b) => a - b);
  for (let i = 0; i < 5; i++) {
    num_list.shift();
  }
  return num_list;
}
