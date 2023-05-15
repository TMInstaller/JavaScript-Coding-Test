function solution(n) {
  let answer = 0;
  const n2 = n.toString(2).split("");
  let nCount = 0;
  for (let i = 0; i < n2.length; i++) {
    if (n2[i] === "1") nCount++;
  }

  // n보다 크고, 2진수로 변환했을 때 1의 개수가 같은 다음에 오는 가장 작은 수
  let nNext = 0; // 다음 수를 저장할 변수
  for (let i = n + 1; ; i++) {
    const nNextBinary = i.toString(2).split("");
    let nNextCount = 0;
    for (let j = 0; j < nNextBinary.length; j++) {
      if (nNextBinary[j] === "1") nNextCount++;
    }
    if (nNextCount === nCount) {
      nNext = nNextBinary.join("");
      break;
    }
  }
  return parseInt(nNext, 2);
}
