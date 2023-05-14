function gradingStudents(grades) {
  let answer = [];

  for (let i = 0; i < grades.length; i++) {
    let roundedGrade = grades[i];

    if (roundedGrade >= 38) {
      if (roundedGrade % 5 >= 3) {
        roundedGrade += 5 - (roundedGrade % 5);
      }
    }

    answer.push(roundedGrade);
  }

  return answer;
}
