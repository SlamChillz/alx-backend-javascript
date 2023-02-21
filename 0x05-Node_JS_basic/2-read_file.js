/**
 * Reads file synchronously and prepares a record with the data
 */
const fs = require('fs');

function countStudents(path) {
  let db;
  try {
    db = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const data = db.split('\n');
  const cslist = [];
  const swlist = [];

  data.forEach((stud) => {
    const elem = stud.split(',');
    if (elem !== [] && elem !== null) {
      if (elem[3] === 'CS') {
        cslist.push(elem[0]);
      } else if (elem[3] === 'SWE') {
        swlist.push(elem[0]);
      }
    }
  });
  console.log(`Number of students: ${cslist.length + swlist.length}`);
  console.log(`Number of students in CS: ${cslist.length}. List: ${cslist.join(', ')}`);
  console.log(`Number of students in SWE: ${swlist.length}. List: ${swlist.join(', ')}`);
}

module.exports = countStudents;
