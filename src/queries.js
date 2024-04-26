const connection = require('./db'); // Assuming you have established MySQL connection in a separate file

// Function to get all departments from the database
function getAllDepartments() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM departments', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// Function to get all roles from the database
function getAllRoles() {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT roles.id, roles.title, roles.salary, departments.name AS department
      FROM roles
      INNER JOIN departments ON roles.department_id = departments.id
    `;
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// Function to get all employees from the database
function getAllEmployees() {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT 
        employees.id, 
        employees.first_name AS firstName, 
        employees.last_name AS lastName, 
        roles.title AS role, 
        departments.name AS department, 
        roles.salary,
        CONCAT(managers.first_name, ' ', managers.last_name) AS manager
      FROM employees
      INNER JOIN roles ON employees.role_id = roles.id
      INNER JOIN departments ON roles.department_id = departments.id
      LEFT JOIN employees AS managers ON employees.manager_id = managers.id
    `;
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// Function to add a new department to the database
function addDepartment(departmentName) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO departments (name) VALUES (?)', [departmentName], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

// Function to add a new role to the database
function addRole(title, salary, departmentId) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

// Function to add a new employee to the database
function addEmployee(firstName, lastName, roleId, managerId) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

// Function to update an employee's role in the database
function updateEmployeeRole(employeeId, roleId) {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE employees SET role_id = ? WHERE id = ?', [roleId, employeeId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
};
