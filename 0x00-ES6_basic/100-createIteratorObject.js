export default function createIteratorObject(report) {
  let employees = [];
  for (const list of Object.values(report.allEmployees)) {
    employees = [...employees, ...list];
  }
  return employees;
}
