const Student = require("../../Models/Student");

exports.getCustomersController = async (req,res) => {
  try {
    const customers = await Student.find({});
    if (!customers) return res.status(400).send("Customers not found");
    return res.status(200).send(customers);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};
