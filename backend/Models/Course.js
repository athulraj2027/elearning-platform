const mongoose = require("mongoose");

const { Schema, ObjectId } = mongoose;

const CourseSchema = new Schema({
  Name: { type: String, required: true },
  description: { type: String, required: true },
  Category: { type: Schema.Types.ObjectId, required: true },
  Teacher: { type: Schema.Types.ObjectId, required: true },
  DiscountedPrice: { type: Number, required: true },
  NumberOfStudentsEnrolled: { type: Number, required: true },
  Price: { type: Number, required: true },
  CreatedAt: { type: Date, default: Date.now(), required: true },
  isDeleted: { type: Boolean, default: false },
  maxStudents: { type: Number, required: true },
  // Rating,Reviews
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
