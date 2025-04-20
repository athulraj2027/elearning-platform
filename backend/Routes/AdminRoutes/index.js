const express = require("express");
const router = express.Router();
const authRoutes = require("./AuthRoutes");
const CourseRoutes = require("./CourseRoutes");
const TeachersRoutes = require("./TeacherRoutes");
const CouponRoutes = require("./CouponRoutes");
const CategoryRoutes = require("./CategoryRoutes");
const CustomerRoutes = require("./CustomerRoutes");

router.use("/auth", authRoutes);
router.use("/course", CourseRoutes);
router.use("/teachers", TeachersRoutes);
router.use("/coupons", CouponRoutes);
router.use("/categories", CategoryRoutes);
router.use("/customers", CustomerRoutes);

module.exports = router;
