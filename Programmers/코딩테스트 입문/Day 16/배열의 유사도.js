function solution(s1, s2) {
  let answer = 0;
  for (sOne of s1) for (sTwo of s2) if (sOne === sTwo) answer += 1;
  return answer;
}
