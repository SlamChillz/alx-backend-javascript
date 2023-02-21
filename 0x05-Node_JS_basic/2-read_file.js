/**
 * Reads file synchronously and prepares a record with the data
 */
const fs = require('fs');

function countStudents(filepath) {
  let studentCount = 0;
  let report = {};
  try {
    const content = fs.readFileSync(filepath, { encoding: 'utf8' }).split('\n').slice(1);
    report = content.reduce((records, curr) => {
      if (curr.length > 3) {
        const line = curr.split(',');
        const field = line[3];
        if (field.length > 0 && line[0] !== ' ') {
          studentCount += 1;
          const value = records[field] ? records[field] : '';
          if (value === '') {
            return { ...records, [field]: `${line[0]}` };
          }
          return { ...records, [field]: `${value}, ${line[0]}` };
        }
      }
      return records;
    }, {});
    if (studentCount > 0) {
      console.log(`Number of students: ${studentCount}`);
      for (const [k, v] of Object.entries(report)) {
        console.log(`Number of students in ${k}: ${v.split(',').length}. List: ${v.trim()}`);
      }
    }
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
