function solution(n, arr1, arr2) {
  const map1 = arr1.map((num) =>
    num
      .toString(2)
      .padStart(n, "0")
      .split("")
      .map((bit) => (bit === "1" ? "#" : " "))
      .join("")
  );
  const map2 = arr2.map((num) =>
    num
      .toString(2)
      .padStart(n, "0")
      .split("")
      .map((bit) => (bit === "1" ? "#" : " "))
      .join("")
  );
  const result = arr1.map(
    (num, idx) =>
      (num | arr2[idx]) // 비트 OR 연산으로 합치기
        .toString(2)
        .padStart(n, "0") // 2진수로 변환하고, 앞에 0 채우기
        .replace(/1/g, "#") // 1을 #으로 바꾸기
        .replace(/0/g, " ") // 0을 공백으로 바꾸기
        .split("") // 문자열을 분할하여 배열로 만들기
        .join("") // 배열을 다시 문자열로 합치기
  );
  return result;
}
