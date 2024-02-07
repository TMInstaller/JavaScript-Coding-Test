function solution(sizes) {
  let max = Math.max(...sizes[0]);
  let min = Math.min(...sizes[0]);
  for (let i = 1; i < sizes.length; i += 1) {
    if (Math.max(...sizes[i]) > max) max = Math.max(...sizes[i]);
    if (Math.min(...sizes[i]) > min) min = Math.min(...sizes[i]);
  }
  return max * min;
}
