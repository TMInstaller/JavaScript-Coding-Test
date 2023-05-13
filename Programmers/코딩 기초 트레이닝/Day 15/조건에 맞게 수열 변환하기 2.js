function solution(arr) {
  let x = 0;

  while (true) {
    let newArr = arr.map((val) =>
      val >= 50 && val % 2 === 0
        ? val / 2
        : val < 50 && val % 2 !== 0
        ? val * 2 + 1
        : val
    );

    if (JSON.stringify(arr) === JSON.stringify(newArr)) {
      break;
    }

    arr = newArr;
    x++;
  }

  return x;
}
