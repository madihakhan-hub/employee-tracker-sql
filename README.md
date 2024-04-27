# employee-tracker-sql


## Description

This command-line application allows business owners to manage their company's employee database efficiently. Users can view departments, roles, and employees, add new departments, roles, and employees, and update existing employee roles.

## Features

- View all departments, roles, and employees.
- Add new departments, roles, and employees.
- Update employee roles.
- Interactive command-line interface (CLI) using Inquirer.js.
- MySQL database integration for data storage.

## Installation

1. Clone the repository to your local machine:

   ```
   git clone <https://github.com/madihakhan-hub/employee-tracker-sql.git>
   ```

2. Navigate to the project directory:

   ```
   cd employee-tracker-sql
   ```

3. Install dependencies using npm:

   ```
   npm install
   ```

4. Ensure you have MySQL installed and running on your system.

5. Create a MySQL database and run the `schema.sql` file to set up the required tables.

6. Optionally, you can populate the database with initial data using the `seeds.sql` file.

## Usage

1. Start the application by running:

   ```
   node index.js
   ```

2. Follow the prompts to perform various actions such as viewing departments, roles, and employees, adding new data, or updating employee roles.

3. Choose "Exit" to quit the application.



## Technologies Used

- Node.js
- MySQL
- Inquirer.js



