function solution(myString, pat) {
  let answer = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    let isSame = "";
    for (let j = i; j < i + pat.length; j++) {
      isSame += myString[j];
    }
    if (isSame === pat) answer += 1;
  }
  return answer;
}
