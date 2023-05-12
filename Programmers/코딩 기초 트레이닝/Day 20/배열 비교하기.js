function solution(arr1, arr2) {
  let answer = 0;
  let arr1Sum = 0;
  let arr2Sum = 0;
  const same = arr1.length === arr2.length;
  if (same) {
    for (let i = 0; i < arr1.length; i++) {
      arr1Sum += arr1[i];
      arr2Sum += arr2[i];
    }
    if (arr1Sum > arr2Sum) {
      return 1;
    } else if (arr1Sum < arr2Sum) {
      return -1;
    } else {
      return 0;
    }
  } else {
    if (arr1.length > arr2.length) {
      return 1;
    } else {
      return -1;
    }
  }
  return answer;
}
