const mongoose = require("mongoose");

const { Schema } = mongoose;

const CategorySchema = new Schema({
  Name: { type: String, required: true, unique: true },
  Description: { type: String, required: true },
  image: { type: String, required: true },
  NoOfCourses: { type: Number, default: 0 },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  createdAt: { type: Date, default: Date.now() },
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
