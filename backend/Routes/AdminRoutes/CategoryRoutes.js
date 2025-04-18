const express = require("express");
const router = express.Router();
const CategoryUpload = require("../../services/multer");
const CategoryController = require("../../Controllers/AdminControllers/CategoryControllers");

router
  .route("/add")
  .post(
    CategoryUpload.single("image"),
    CategoryController.AddCategoryController
  );

router.route("/").get(CategoryController.GetCategoryController);

module.exports = router;
