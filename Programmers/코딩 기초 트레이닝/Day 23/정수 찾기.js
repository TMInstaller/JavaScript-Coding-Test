function solution(num_list, n) {
  if (num_list.includes(n)) return 1;

  return 0;
}

// 왜 includes는 되고 n in num_list는 안될까?
