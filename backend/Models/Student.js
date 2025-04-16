const mongoose = require("mongoose");

const { Schema, ObjectId } = mongoose;

const StudentSchema = new Schema({
  JoinedDate: { type: Date, default: Date.now, required: true },
  Email: { type: String, required: true, unique: true },
  CoursesEnrolled: [
    { type: Schema.Types.ObjectId, ref: "Course", required: true },
  ],
  IsActive: { type: Boolean, default: false, required: true },
  CategoriesInterested: [{ type: Schema.Types.ObjectId, required: true }],
  Name: { type: String, required: true, unique: true },
  Password: { type: String },
  googleId: { type: String, default: undefined },
  Cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
