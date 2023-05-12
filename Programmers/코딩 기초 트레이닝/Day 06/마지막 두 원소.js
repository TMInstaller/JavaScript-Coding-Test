function solution(num_list) {
  const lastEl = num_list[num_list.length - 1];
  const beforeLastEl = num_list[num_list.length - 2];
  if (lastEl - beforeLastEl > 0) {
    num_list.push(lastEl - beforeLastEl);
  } else {
    num_list.push(lastEl * 2);
  }

  return num_list;
}
