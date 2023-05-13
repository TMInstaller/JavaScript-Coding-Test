function solution(myString) {
  let answer = [];
  myString = myString.split("x");
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] !== "") {
      answer.push(myString[i]);
    }
  }
  return answer.sort();
}
