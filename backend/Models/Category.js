const mongoose = require("mongoose");

const { Schema, ObjectId } = mongoose;

const CategorySchema = new Schema({
  Name: { type: String, required: true, unique: true },
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
