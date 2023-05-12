function solution(my_string) {
  let ans = [];
  my_string.split(" ").forEach((m) => {
    if (m !== "") {
      ans.push(m);
    }
  });

  return ans;
}
