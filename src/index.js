// Import necessary modules
const inquirer = require('inquirer');
const { getAllDepartments, getAllRoles, getAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./queries');
const { promptAddDepartment, promptAddRole, promptAddEmployee, promptUpdateEmployeeRole } = require('./prompts');
const { formatTable } = require('./utils');
const connection = require('./db'); // Assuming you have established MySQL connection in a separate file

// Connect to MySQL database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
  startApp();
});

// Function to start the application
function startApp() {
  // Prompt user for action
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    }
  ]).then((answer) => {
    // Call appropriate function based on user's choice
    switch (answer.action) {
      case 'View all departments':
        viewDepartments();
        break;
      case 'View all roles':
        viewRoles();
        break;
      case 'View all employees':
        viewEmployees();
        break;
      case 'Add a department':
        addDepartmentHandler();
        break;
      case 'Add a role':
        addRoleHandler();
        break;
      case 'Add an employee':
        addEmployeeHandler();
        break;
      case 'Update an employee role':
        updateEmployeeRoleHandler();
        break;
      case 'Exit':
        connection.end();
        console.log('Goodbye!');
        break;
    }
  });
}

// Define functions for each action
async function viewDepartments() {
  try {
    const departments = await getAllDepartments();
    console.log(formatTable(departments));
    startApp();
  } catch (error) {
    console.error('Error retrieving departments:', error);
    startApp();
  }
}

async function viewRoles() {
  try {
    const roles = await getAllRoles();
    console.log(formatTable(roles));
    startApp();
  } catch (error) {
    console.error('Error retrieving roles:', error);
    startApp();
  }
}

async function viewEmployees() {
  try {
    const employees = await getAllEmployees();
    console.log(formatTable(employees));
    startApp();
  } catch (error) {
    console.error('Error retrieving employees:', error);
    startApp();
  }
}

async function addDepartmentHandler() {
  try {
    const departmentData = await promptAddDepartment();
    await addDepartment(departmentData.name);
    console.log('Department added successfully!');
    startApp();
  } catch (error) {
    console.error('Error adding department:', error);
    startApp();
  }
}

async function addRoleHandler() {
  try {
    const departments = await getAllDepartments();
    const roleData = await promptAddRole(departments);
    await addRole(roleData.title, roleData.salary, roleData.department);
    console.log('Role added successfully!');
    startApp();
  } catch (error) {
    console.error('Error adding role:', error);
    startApp();
  }
}

async function addEmployeeHandler() {
  try {
    const roles = await getAllRoles();
    const employees = await getAllEmployees();
    const employeeData = await promptAddEmployee(roles, employees);
    await addEmployee(employeeData.firstName, employeeData.lastName, employeeData.role, employeeData.manager);
    console.log('Employee added successfully!');
    startApp();
  } catch (error) {
    console.error('Error adding employee:', error);
    startApp();
  }
}

async function updateEmployeeRoleHandler() {
  try {
    const employees = await getAllEmployees();
    const roles = await getAllRoles();
    const updateData = await promptUpdateEmployeeRole(employees, roles);
    await updateEmployeeRole(updateData.employeeId, updateData.roleId);
    console.log('Employee role updated successfully!');
    startApp();
  } catch (error) {
    console.error('Error updating employee role:', error);
    startApp();
  }
}
