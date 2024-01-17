function solution(sequence, k) {
  let [left, right] = [0, 0];
  let sum = sequence[0];
  const result = [];

  while (right < sequence.length) {
    if (sum < k) {
      // k보다 작으면 오른쪽 포인터 이동
      right += 1;
      sum += sequence[right];
    } else if (sum > k) {
      // k보다 크면 왼쪽 포인터 이동
      sum -= sequence[left];
      left += 1;
    } else {
      // k와 같으면 result에 push
      result.push([left, right]);
      right += 1;
      sum += sequence[right];
    }
  }

  return result.sort(condition)[0];
}

function condition(a, b) {
  const lenDiff = Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]);
  if (lenDiff !== 0) return lenDiff; // 길이에 따라 정렬
  return a[0] - b[0];
}
