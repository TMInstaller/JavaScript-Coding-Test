function solution(myString, pat) {
  let answer = "";
  let reversePat = pat.split("").reverse().join("");
  let reverseMyString = myString.split("").reverse().join("");

  return myString.slice(
    0,
    myString.length - reverseMyString.indexOf(reversePat)
  );
}
