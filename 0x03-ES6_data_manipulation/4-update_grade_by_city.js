export default function updateStudentGradeByCity(students, city, grades) {
  if (students instanceof Array) {
    const newStudents = students.filter((s) => s.location === city);
    return newStudents.map((s) => {
      const grade = grades.find((g) => g.studentId === s.id);
      s.grade = grade ? grade.grade : 'N/A'; /* eslint-disable-line no-param-reassign */
      return s;
    });
  }
  return [];
}
