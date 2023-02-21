/**
 * Reads file asynchronously and prepares a report with the data from a csv file
 */
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, records) => {
      if (err) reject(new Error('Cannot load the database'));
      else {
        const content = records.split('\n');
        const cslist = [];
        const swelist = [];

        content.forEach((record) => {
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
        resolve();
      }
    });
  });
}

module.exports = countStudents;
