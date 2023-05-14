function solution(order) {
  let answer = 0;
  const menuName = ["americano", "cafelatte", "anything"];
  const menuCost = [4500, 5000, 4500];
  for (let i = 0; i < order.length; i++) {
    for (let j = 0; j < menuName.length; j++) {
      if (order[i].includes(menuName[j])) {
        answer += menuCost[j];
      }
    }
  }
  return answer;
}
