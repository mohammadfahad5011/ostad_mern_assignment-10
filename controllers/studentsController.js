const StudentsModel = require("../models/StudentsModel");

const getAllStudents = (req, res) => {
  StudentsModel.find({}, (err, students) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json(students);
    }
  });
};

const getStudentById = (req, res) => {
  const studentId = req.params.id;
  StudentsModel.findById(studentId, (err, student) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json(student);
    }
  });
};

const createStudent = (req, res) => {
  const studentData = req.body;
  StudentsModel.create(studentData, (err, newStudent) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(201).json(newStudent);
    }
  });
};

const updateStudent = (req, res) => {
  const studentId = req.params.id;
  const updatedStudentData = req.body;
  StudentsModel.findByIdAndUpdate(
    studentId,
    updatedStudentData,
    { new: true },
    (err, updatedStudent) => {
      if (err) {
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(200).json(updatedStudent);
      }
    }
  );
};

const deleteStudent = (req, res) => {
  const studentId = req.params.id;
  StudentsModel.findByIdAndDelete(studentId, (err) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(204).send();
    }
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
