function solution(myString) {
  let ans = "";
  myString.split("").forEach((m) => {
    ans += m === "a" || m === "A" ? m.toUpperCase() : m.toLowerCase();
  });
  return ans;
}
