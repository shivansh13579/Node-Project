const Student = require("../models/studentModel");

module.exports.createStudent = async (req, res) => {
  try {
    const { firstName, lastName, fatherName, email } = req.body;

    if (!firstName || !lastName || !fatherName || !email) {
      return res.status(400).send("All fields are required");
    }

    const existStudent = await Student.findOne({
      firstName,
      lastName,
      fatherName,
      email,
    });

    if (existStudent) {
      return res.send(400).send("Student Already Exist");
    }

    const student = await Student.create(req.body);

    await student.save();

    res.status(201).json({ student, message: "Student Created Succesfully" });
  } catch (error) {
    res.status(400).send(err.message);
  }
};

module.exports.updateStudent = async (req, res) => {
  try {
    const studentUpdate = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!studentUpdate) {
      return res.status(400).send("Student Not Fount");
    }

    res
      .status(201)
      .json({ studentUpdate, message: "Student Update Successfylly" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findOne({ _id: req.params.id });
    if (!student) {
      return res.status(400).send("Student Not Found");
    }

    res.status(200).json({
      message: "Student Get Successfully",
      student,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports.getAllStudent = async (req, res) => {
  try {
    const students = await Student.find({});
    if (!students) {
      return res.status(400).send("Sudents not found");
    }
    res.status(200).json({
      message: "All Students Get Successfully",
      students,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
