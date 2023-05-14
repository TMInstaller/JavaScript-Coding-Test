function solution(my_string, queries) {
  for (q of queries) {
    const startIndex = q[0];
    const endIndex = q[1];
    const substring = my_string.substring(startIndex, endIndex + 1);
    const reversedSubstring = substring.split("").reverse().join("");

    my_string =
      my_string.substring(0, startIndex) +
      reversedSubstring +
      my_string.substring(endIndex + 1);
  }

  return my_string;
}
