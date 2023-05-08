function solution(cards1, cards2, goal) {
  let answer = "Yes";
  let sentence = [];

  goal.forEach((g) => {
    if (g === cards1[0] && cards1) {
      sentence.push(cards1[0]);
      cards1.shift();
    } else if (g === cards2[0] && cards2) {
      sentence.push(cards2[0]);
      cards2.shift();
    } else {
      answer = "No";
    }
  });

  return answer === "Yes" && sentence.join("") === goal.join("") ? "Yes" : "No";
}
