const Course = require("../../Models/Course");
const Cart = require("../../Models/Cart");

exports.AddtoCartController = async (req, res) => {
  const { studentId, courseId } = req.body;
  try {
    const cart = await Cart.findOne({ studentId });
    if (!cart) cart = new Cart({ studentId, courses: [] });
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });
    const itemIndex = cart.courses.findIndex(
      (item) => item.course.toString() === courseId
    );
    if (itemIndex > -1) {
      return res
        .status(200)
        .json({ message: "Course already added in the cart" });
    } else {
      cart.courses.push({ course: courseId, price: course.Price });
    }
    cart.totalPrice = cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    await cart.save();

    return res
      .status(200)
      .json({ message: "Course added to cart successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error in adding to cart" });
  }
};

exports.RemoveFromCartController = async (req, res) => {
  const { studentId, courseId } = req.body;
  try {
    const cart = await Cart.findOne({ studentId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    cart.courses = cart.courses.filter(
      (item) => item.course.toString() !== courseId
    );
    cart.totalPrice = cart.courses.reduce((acc, item) => acc + item.price, 0);
    await cart.save();
    return res
      .status(200)
      .json({ message: "Course removed from cart successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error in deleting from cart" });
  }
};

exports.ClearCartController = async (req, res) => {
  const { studentId } = req.body;

  try {
    await Cart.findOneAndDelete({ studentId });
    return res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error in clearing the cart",
    });
  }
};
