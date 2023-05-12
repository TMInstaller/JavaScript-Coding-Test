function solution(myString) {
  let splitedString = [];
  myString = myString.split("x");
  console.log(myString);
  for (let i = 0; i < myString.length; i++) {
    splitedString.push(myString[i].length);
  }
  return splitedString;
}
