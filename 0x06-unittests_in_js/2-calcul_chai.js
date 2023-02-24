/**
 * Round params and sum them
 * @param {string} type
 * @param {number} a
 * @param {number} b
 */
function calculateNumber(type, a, b) {
  let result;
  if (type === 'SUM') {
    result = Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    result = Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    if (Math.abs(Math.round(b)) === 0) {
      result = 'Error';
    } else {
      result = Math.round(a) / Math.round(b);
    }
  }
  return result;
}

module.exports = calculateNumber;
