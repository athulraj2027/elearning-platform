const express = require("express");
const router = express.Router();
const CourseController = require("../../Controllers/AdminControllers/CourseController");

router.route("/add").post(CourseController.AdminAddCourseController);

module.exports = router;
