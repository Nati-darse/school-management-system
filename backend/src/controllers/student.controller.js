const Student = require("../models/student.model");
const mongoose = require("mongoose");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error);
  }
};

module.exports = {
  getAllStudents,
};
