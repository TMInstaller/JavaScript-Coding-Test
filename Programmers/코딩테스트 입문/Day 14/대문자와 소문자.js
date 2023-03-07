function solution(my_string) {
  let ans = "";
  my_string.split("");
  for (s of my_string) {
    if (s === s.toUpperCase()) {
      ans += s.toLowerCase();
    } else {
      ans += s.toUpperCase();
    }
  }
  return ans;
}
