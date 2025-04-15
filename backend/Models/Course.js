const mongoose = require("mongoose");

const { Schema, ObjectId } = mongoose;

const CourseSchema = new Schema({
  Category: { type: Schema.Types.ObjectId, required: true },
  Teacher: { type: Schema.Types.ObjectId, required: true },
  DiscountedPrice: { type: Number, required: true },
  NumberOfStudentsEnrolled: { type: Number, required: true },
  Price: { type: Number, required: true },
  CreatedAt: { type: Date,default:Date.now(), required: true },
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
