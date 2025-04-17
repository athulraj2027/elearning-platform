const Course = require("../../Models/Course");

exports.AdminAddCourseController = async (req, res) => {
  try {
    const { name, category, teacher, discountedPrice, price, maxStudents } =
      req.body;
    const existingCourse = await Course.findOne({ Name: name });
    if (existingCourse)
      return res.status(404).json({ message: "This course name is taken" });
    const newCourse = new Course({
      Name: name,
      Category: category,
      Teacher: teacher,
      DiscountedPrice: discountedPrice,
      Price: price,
      maxStudents,
    });
    await newCourse.save();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error in add course controller" });
  }
};

exports.GetCourseController = async (req, res) => {
  try {
    const courses = await Course.find({});
    if (!courses)
      return res.status(400).json({ message: "Couldn't get courses" });
    return res.status(200).send(courses);
  } catch (error) {
    console.error("Error in loading courses : ", error);
  }
};
