function solution(food) {
  // food[0] = 물이며, 중앙에 위치해있어야함
  // food[index] = 음식이며 짝수개여야함

  let start = "";
  for (let i = 1; i < food.length; i += 1) {
    for (let j = 0; j < Math.floor(food[i] / 2); j += 1) {
      start += `${i}`;
    }
  }
  let water = "0";

  return `${start}${water}${start.split("").reverse().join("")}`;
}
