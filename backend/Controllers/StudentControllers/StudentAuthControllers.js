const bcrypt = require("bcrypt");
const Student = require("../../Models/Student");
const SALT = parseInt(process.env.SALT) || 10;
const { generateJWT } = require("../../services/jwt");

exports.StudentSignupController = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const existingStudent = await Student.findOne({ Email: email });
    if (existingStudent)
      return res.status(400).json({ message: "Student already exists" });
    const hashedPassword = await bcrypt.hash(password, SALT);
    if (!hashedPassword)
      return res.status(400).json({ message: "Password hashing failed" });
    const newStudent = new Student({
      Name: name,
      Email: email,
      Password: hashedPassword,
    });
    if (!newStudent)
      return res.status(400).json({ message: "Student creation failed" });

    newStudent.save();

    return res.status(200).send(newStudent);
  } catch (error) {
    console.error(error);
    return error;
  }
};

exports.StudentSigninController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const student = await Student.findOne({ Email: email });
    if (!student) return res.status(400).json({ message: "No Account found" });
    const isPasswordValid = bcrypt.compare(password, student.Password);
    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid password" });

    student.IsActive = true;
    await student.save();

    const token = generateJWT(student);

    return res.status(200).json({
      message: "Student signed in ",
      token,
      student: { id: student._id, name: student.Name, email: student.Email },
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};
