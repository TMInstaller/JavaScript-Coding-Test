function solution(my_string, is_prefix) {
  if (
    my_string.split("").splice(0, is_prefix.length).join("") === is_prefix &&
    my_string.includes(is_prefix)
  ) {
    return 1;
  }
  return 0;
}
