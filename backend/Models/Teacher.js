const mongoose = require("mongoose");

const { Schema } = mongoose;

const TeacherSchema = new Schema({
  JoinedDate: { type: Date, default: Date.now, required: true },
  Email: { type: String, required: true, unique: true },
  Courses: [{ type: Schema.Types.ObjectId, required: true }],
  CategoriesTeaching: [
    { type: Schema.Types.ObjectId, ref: "Category", required: true },
  ],
  IsActive: { type: Boolean, default: false, required: true },
  Name: { type: String, required: true, unique: true },
  Password: { type: String },
  Deleted: { type: Boolean, default: false },
});
 
const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
