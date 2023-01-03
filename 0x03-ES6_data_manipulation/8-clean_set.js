export default function cleanSet(set, startString) {
  let array = Array.from(set);
  const len = startString.length;
  array = array.filter((a) => (a[0] === startString[0]) && (a.substring(0, len) === startString));
  return array.map((s) => s.substring(len)).join('-');
}
