export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((s) => s.location === city);
  }
  return [];
}
