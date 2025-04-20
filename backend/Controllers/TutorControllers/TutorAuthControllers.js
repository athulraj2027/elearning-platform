const Teacher = require("../../Models/Teacher");
const bcrypt = require("bcrypt");
const SALT = parseInt(process.env.SALT) || 10;
const { generateJWT } = require("../../services/jwt");

exports.TutorSignupController = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const existingTeacher = await Teacher.findOne({ Email: email });
    if (existingTeacher)
      return res.status(400).json({ message: "Tutor already exists" });
    const hashedPassword = await bcrypt.hash(password, SALT);
    if (!hashedPassword)
      return res.status(400).json({ message: "Password hashing failed" });
    const newTeacher = new Teacher({
      Name: name,
      Email: email,
      Password: hashedPassword,
    });
    if (!newTeacher)
      return res.status(400).json({ message: "Teacher creation failed" });

    newTeacher.save();

    return res.status(200).send(newTeacher);
  } catch (error) {
    console.error(error);
    return error;
  }
};

exports.TutorSigninController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const teacher = await Teacher.findOne({ Email: email });
    if (!teacher) return res.status(400).json({ message: "No Account found" });
    const isPasswordValid = bcrypt.compare(password, teacher.Password);
    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid password" });

    teacher.IsActive = true;
    await teacher.save();

    const token = generateJWT(teacher);

    return res.status(200).json({
      message: "Teacher signed in ",
      token,
      student: { id: teacher._id, name: teacher.Name, email: teacher.Email },
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};
