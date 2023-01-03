export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((acc, curr) => acc + curr.id, 0);
  }
  return 0;
}
