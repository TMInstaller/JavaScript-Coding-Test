// feat.chatGPT
function createSortedArray(arr, target) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const difference = Math.abs(arr[i] - target);
    result.push({ difference, value: arr[i] });
  }
  result.sort((a, b) => {
    if (a.difference === b.difference) {
      return b.value - a.value; // key 값이 같으면 큰 수부터 나타내도록 함
    }
    return a.difference - b.difference;
  });
  return result;
}

function solution(numlist, n) {
  let answer = [];
  let check = createSortedArray(numlist, n);
  for (c of check) {
    answer = [...answer, c.value];
  }
  return answer;
}
