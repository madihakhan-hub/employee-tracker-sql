const connection = require('./db');

class QueryFunctions {
  static getAllDepartments() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM department', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  static getAllRoles() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM role', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  static getAllEmployees() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM employee', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  // Add more query functions as needed
}

module.exports = QueryFunctions;
