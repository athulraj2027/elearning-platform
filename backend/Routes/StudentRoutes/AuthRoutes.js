const express = require("express");
const router = express.Router();
const StudentAuthControllers = require("../../Controllers/StudentControllers/StudentAuthControllers");

router.route("/signup").post(StudentAuthControllers.StudentSignupController);
router.route("/signin").post(StudentAuthControllers.StudentSigninController);

module.exports = router;
