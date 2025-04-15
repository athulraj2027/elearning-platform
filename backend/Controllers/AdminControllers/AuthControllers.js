const Admin = require("../../Models/Admin");
const { generateJWT } = require("../../services/jwt");

exports.AdminSigninController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ Email: email });
    if (!admin) return res.status(400).json({ message: "No Account found" });
    const isPasswordValid = bcrypt.compare(password, admin.Password);
    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid password" });

    await admin.save();

    const token = generateJWT(admin);

    return res.status(200).json({
      message: "Admin signed in ",
      token,
      student: { id: student._id, name: student.Name, email: student.Email },
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};
