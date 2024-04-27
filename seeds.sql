-- Insert departments
INSERT INTO department (name) VALUES
('Engineering'),
('Marketing'),
('Finance');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
('Software Engineer', 80000, 1),
('Marketing Manager', 90000, 2),
('Financial Analyst', 75000, 3);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Joe', 'Davis', 1, NULL),
('Jenny', 'Davis', 2, 1),
('Matthew', 'James', 3, 2);
