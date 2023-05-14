function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    let answer = "";
    answer += String(" ").repeat(n - i);
    answer += String("#").repeat(i);
    console.log(answer);
  }
}
