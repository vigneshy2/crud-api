const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
};

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getstudentById, [id], (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
};

const addStudent = (req, res) => {
    const { name, email, age, dob } = req.body;

    pool.query(queries.checkEmailExist, [email], (err, result) => {
        if (err) throw err;
        if (result.rows.length) {
            return res.status(400).send("E-mail Already Exists.");
        } else {
            pool.query(queries.addStudent, [name, email, age, dob], (err, result) => {
                if (err) throw err;
                res.status(201).send('Student inserted.');
            });
        }
    });
};

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getstudentById, [id], (err, result) => {
        if (err) throw err;
        const noStudentFound = !result.rows.length;
        if (noStudentFound) {
            return res.status(404).send("No student found in record ... ");
        } else {
            pool.query(queries.deleteStudent, [id], (err, result) => {
                if (err) throw err;
                res.status(200).send("Student removed successfully");
            });
        }
    });
};

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, age, dob } = req.body;
    
    pool.query(queries.getstudentById, [id], (err, result) => {
        if (err) throw err;
        const noStudentFound = !result.rows.length;
        if (noStudentFound) {
            return res.status(404).send("No student found in record ... ");
        } else {
            pool.query(queries.updateStudent, [name, email, age, dob, id], (err, result) => {
                if (err) throw err;
                res.status(200).send("Student updated successfully");
            });
        }
    });
};

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudent,
    updateStudent
};
