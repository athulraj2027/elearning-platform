const express = require("express");
const router = express.Router();
const authRoutes = require("./AuthRoutes");
const CourseRoutes = require("./CourseRoutes");
const TeachersRoutes = require("./TeacherRoutes");

router.use("/auth", authRoutes);
router.use("/course", CourseRoutes);
router.use("/teachers", TeachersRoutes);

module.exports = router;
