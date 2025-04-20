const express = require("express");
const router = express.Router();
const authControllers = require("../../Controllers/TutorControllers/TutorAuthControllers");

router.route("/signup").post(authControllers.TutorSignupController);
router.route("/signin").post(authControllers.TutorSigninController);
module.exports = router;
