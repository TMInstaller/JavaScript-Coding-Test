function solution(food) {
  let answer = "";
  // 물은 food[0] 원소, 중앙에 위치, 항상 1개
  // food[1]부터는 홀수이면 하나를 사용하지 못하고 나머지를 양 끝에 하나씩 추가
  // 그렇게 foor[1]/2개, food[2]/2개 .... 이렇게 가면
  // 마지막에 나온 문자열 + '0' + 문자열 reverse해서 정답 출력
  for (let i = 1; i < food.length; i++) {
    answer += i.toString().repeat(Math.floor(food[i] / 2));
  }
  answer += "0" + answer.split("").reverse().join("");
  return answer;
}
