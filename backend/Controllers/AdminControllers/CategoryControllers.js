const Category = require("../../Models/Category");

exports.GetCategoryController = async (req, res) => {
  try {
    const categories = await Category.find({});
    if (!categories) return res.status(400).send("categories not found");
    return res.status(200).send(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

exports.AddCategoryController = async (req, res) => {
  try {
    const { name, description } = req.body;
    const file = req.file;

    if (!name || !description || !file)
      return res.status(400).send("credentials missing");

    const newCategory = new Category({
      Name: name,
      Description: description,
      image: file.path,
    });
    if (!newCategory) return res.status(500).send("Category creation failed");
    await newCategory.save();
    return res.status(201).send("Category created successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

exports.EditCategoryController = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

exports.ToggleCategoryStatusController = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
