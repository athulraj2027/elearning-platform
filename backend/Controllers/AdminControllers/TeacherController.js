const bcrypt = require("bcrypt");
const Teacher = require("../../Models/Teacher");
const SALT = parseInt(process.env.SALT) || 10;

exports.AdminAddTeacherController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingTeacher = await Teacher.findOne({ Email: email });
    if (existingTeacher)
      return res.status(400).json({ message: "Teacher exists" });
    const hashedPassword = await bcrypt.hash(password, SALT);
    if (!hashedPassword)
      return res.status(400).json({ message: "Password hashing failed" });
    const newTeacher = new Teacher({
      Name: name,
      Email: email,
      Password: hashedPassword,
    });
    if (!newTeacher)
      return res.status(400).json({ message: "Student creation failed" });

    newTeacher.save();

    return res.status(200).send(newTeacher);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error in add teacher controller" });
  }
};

exports.AdminDeleteTeacherController = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTeacher = await Teacher.findByIdAndUpdate(
      id,
      { Deleted: true },
      { new: true }
    );
    if (!deletedTeacher)
      return res.status(400).json({ message: "Couldn't delete teacher" });
    return res.status(200).json({ message: "Successfully deleted teacher" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error in add teacher controller" });
  }
};
