# Student Management API

A REST API for managing student data built with Node.js, Express, and PostgreSQL. This API supports basic CRUD operations including creating, reading, updating, and deleting student records.

## Features

- **Get all students**: Retrieve a list of all students.
- **Get student by ID**: Retrieve a specific student by their ID.
- **Add a student**: Add a new student to the database.
- **Update a student**: Update an existing student's information.
- **Delete a student**: Remove a student from the database.

 ## Endpoints
### Get all students
- **GET** `/api/students`

### Get student by ID
- **GET** `/api/students/:id`
  - `id` (integer): ID of the student

### Add a student
- **POST** `/api/students`
  - Body Parameters:
    - `name` (string): Name of the student
    - `email` (string): Email of the student
    - `age` (integer): Age of the student
    - `dob` (date): Date of birth of the student

### Update a student
- **PUT** `/api/students/:id`
  - `id` (integer): ID of the student
  - Body Parameters:
    - `name` (string): Updated name of the student
    - `email` (string): Updated email of the student
    - `age` (integer): Updated age of the student
    - `dob` (date): Updated date of birth of the student

### Delete a student
- **DELETE** `/api/students/:id`
  - `id` (integer): ID of the student

## Database

This project uses PostgreSQL as its database. Ensure you have PostgreSQL installed and configured properly. Update the `db.js` file with your database credentials.

## Installation
Clone the repository:
   ```bash
   git clone https://github.com/vigneshy2/crud-api.git
