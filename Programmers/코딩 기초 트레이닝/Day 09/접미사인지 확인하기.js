function solution(my_string, is_suffix) {
  let answer = 0;
  const checkLastAlphabet =
    my_string[my_string.length - 1] === is_suffix[is_suffix.length - 1];
  const includesSuffix = my_string.includes(is_suffix);
  return (answer = checkLastAlphabet && includesSuffix ? 1 : 0);
}
