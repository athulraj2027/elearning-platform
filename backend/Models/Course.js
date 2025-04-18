const mongoose = require("mongoose");

const { Schema } = mongoose;

const LectureSchema = new Schema({
  name: { type: String, required: true },
  video: {},
  note: {},
});

const ReviewSchema = new Schema({
  review: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  rating: { type: Number, required: true },
});

const CourseSchema = new Schema({
  Name: { type: String, required: true },
  description: { type: String, required: true },
  Category: { type: Schema.Types.ObjectId, required: true },
  Teacher: { type: Schema.Types.ObjectId, required: true },
  DiscountedPrice: { type: Number, required: true },
  NumberOfStudentsEnrolled: { type: Number, required: true },
  Price: { type: Number, required: true },
  Content: [LectureSchema],
  CreatedAt: { type: Date, default: Date.now(), required: true },
  updatedAt: { type: Date, default: Date.now(), required: true },
  isDeleted: { type: Boolean, default: false },
  maxStudents: { type: Number, required: true },
  Requirements: [{ type: String }],
  Reviews: [ReviewSchema],
  isVerified: { type: Boolean, required: true, default: false },
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
