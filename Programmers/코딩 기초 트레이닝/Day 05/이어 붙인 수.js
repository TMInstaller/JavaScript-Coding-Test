function solution(num_list) {
  let even = "";
  let odd = "";
  num_list.forEach((n) => {
    even += n % 2 === 0 ? `${n}` : ``;
    odd += n % 2 === 1 ? `${n}` : ``;
  });
  return parseInt(even) + parseInt(odd);
}
