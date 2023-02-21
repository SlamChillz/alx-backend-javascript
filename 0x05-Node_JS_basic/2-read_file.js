/**
 * Reads file synchronously and prepares a report with the data from a csv file
 */
const fs = require('fs');

function countStudents(filepath) {
  let content;
  try {
    content = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const records = content.split('\n');
  const cslist = [];
  const swelist = [];

  records.forEach((record) => {
    const field = record.split(',');
    if (field !== [] && field !== null) {
      if (field[3] === 'CS') {
        cslist.push(field[0]);
      } else if (field[3] === 'SWE') {
        swelist.push(field[0]);
      }
    }
  });
  console.log(`Number of students: ${cslist.length + swelist.length}`);
  console.log(`Number of students in CS: ${cslist.length}. List: ${cslist.join(', ')}`);
  console.log(`Number of students in SWE: ${swelist.length}. List: ${swelist.join(', ')}`);
}

module.exports = countStudents;
