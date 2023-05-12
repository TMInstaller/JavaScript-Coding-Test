function solution(myString, pat) {
  let answer = 0;
  let myStringAfter = "";
  myString.split("").forEach((m) => {
    myStringAfter += m === "A" ? "B" : "A";
  });
  return (answer = myStringAfter.includes(pat) ? 1 : 0);
}
