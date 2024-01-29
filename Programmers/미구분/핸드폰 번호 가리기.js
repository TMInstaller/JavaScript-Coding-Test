function solution(phone_number) {
  let show = "";
  for (let i = 0; i < phone_number.length - 4; i += 1) {
    show += "*";
  }
  for (let i = phone_number.length - 4; i < phone_number.length; i += 1) {
    show += phone_number[i];
  }
  return show;
}
