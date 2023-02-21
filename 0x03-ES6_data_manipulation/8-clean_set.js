export default function cleanSet(set, startString) {
  if ((set instanceof Set) && (typeof startString === 'string')) {
    let array = Array.from(set);
    const len = startString.length;
    array = array.filter((a) => typeof a === 'string' && a[0] === startString[0] && a.startsWith(startString));
    return array.map((s) => s.substring(len)).join('-');
  }
  return '';
}
