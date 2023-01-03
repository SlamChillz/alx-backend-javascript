export default function getListStudentIds(arr) {
  if (arr instanceof Array) {
    return arr.map((obj) => obj.id);
  }
  return [];
}
