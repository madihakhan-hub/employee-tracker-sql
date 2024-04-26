const inquirer = require('inquirer');

// Function to prompt user to enter department name
function promptAddDepartment() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the department:',
      validate: (input) => {
        if (input.trim() === '') {
          return 'Department name cannot be empty.';
        }
        return true;
      }
    }
  ]);
}

// Function to prompt user to enter role details
function promptAddRole(departments) {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of the role:',
      validate: (input) => {
        if (input.trim() === '') {
          return 'Role title cannot be empty.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary for this role:',
      validate: (input) => {
        if (isNaN(input)) {
          return 'Please enter a valid number for salary.';
        }
        return true;
      }
    },
    {
      type: 'list',
      name: 'department',
      message: 'Select the department for this role:',
      choices: departments.map(department => ({ name: department.name, value: department.id }))
    }
  ]);
}

// Function to prompt user to enter employee details
function promptAddEmployee(roles, employees) {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter the first name of the employee:',
      validate: (input) => {
        if (input.trim() === '') {
          return 'First name cannot be empty.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Enter the last name of the employee:',
      validate: (input) => {
        if (input.trim() === '') {
          return 'Last name cannot be empty.';
        }
        return true;
      }
    },
    {
      type: 'list',
      name: 'role',
      message: 'Select the role for this employee:',
      choices: roles.map(role => ({ name: role.title, value: role.id }))
    },
    {
      type: 'list',
      name: 'manager',
      message: 'Select the manager for this employee:',
      choices: [{ name: 'None', value: null }, ...employees.map(employee => ({ name: `${employee.firstName} ${employee.lastName}`, value: employee.id }))]
    }
  ]);
}

// Function to prompt user to select employee and new role for updating role
function promptUpdateEmployeeRole(employees, roles) {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'employeeId',
      message: 'Select the employee to update:',
      choices: employees.map(employee => ({ name: `${employee.firstName} ${employee.lastName}`, value: employee.id }))
    },
    {
      type: 'list',
      name: 'roleId',
      message: 'Select the new role for this employee:',
      choices: roles.map(role => ({ name: role.title, value: role.id }))
    }
  ]);
}

module.exports = {
  promptAddDepartment,
  promptAddRole,
  promptAddEmployee,
  promptUpdateEmployeeRole
};
