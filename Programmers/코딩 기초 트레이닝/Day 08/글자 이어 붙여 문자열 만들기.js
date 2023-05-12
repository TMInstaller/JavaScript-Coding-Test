function solution(my_string, index_list) {
  let ans = "";
  index_list.forEach((i) => {
    ans += my_string[i];
  });
  return ans;
}
