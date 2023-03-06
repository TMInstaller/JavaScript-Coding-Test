// numbers 길이 0 -> 2 -> 4 -> 6
const solution = (numbers, k) => numbers[(k * 2 - 2) % numbers.length];
