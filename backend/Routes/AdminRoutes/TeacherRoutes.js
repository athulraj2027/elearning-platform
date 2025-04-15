const express = require("express");
const router = express.Router();
const TeacherControllers = require("../../Controllers/AdminControllers/TeacherController");

router.route("/add").post(TeacherControllers.AdminAddTeacherController);
router
  .route("/delete/:id")
  .patch(TeacherControllers.AdminDeleteTeacherController);

module.exports = router;
