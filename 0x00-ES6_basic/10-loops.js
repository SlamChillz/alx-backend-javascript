export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    /* eslint no-param-reassign: "error" */
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
