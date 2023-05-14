function solution(str_list) {
  let answer = [];
  const lIndex = str_list.indexOf("l");
  const rIndex = str_list.indexOf("r");

  if (lIndex === -1 && rIndex === -1) {
    answer = [];
  } else if (lIndex === -1) {
    answer = str_list.slice(rIndex + 1);
  } else if (rIndex === -1) {
    answer = str_list.slice(0, lIndex);
  } else if (lIndex < rIndex) {
    answer = str_list.slice(0, lIndex);
  } else {
    answer = str_list.slice(rIndex + 1);
  }

  return answer;
}
