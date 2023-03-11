// M - 1 번 잘라서 M개가 나오면
// M개를 각각 N - 1번씩 잘라서 완성
// (M - 1) + M * (N - 1)
// ==- 1 + NM
const solution = (M, N) => N * M - 1;
