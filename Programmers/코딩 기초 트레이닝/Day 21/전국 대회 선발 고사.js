function solution(rank, attendance) {
  const students = rank.map((value, index) => ({
    rank: value,
    attendance: attendance[index],
    index,
  }));

  students.sort((a, b) => a.rank - b.rank);

  const selected = students
    .filter((student) => student.attendance)
    .slice(0, 3)
    .map((student) => student.index);

  return selected[0] * 10000 + selected[1] * 100 + selected[2];
}
