const express = require("express");
const router = express.Router();
const UserAuthControllers = require("../../Controllers/UserControllers/UserAuthControllers");

router.route("/signup").post(UserAuthControllers.UserSignupController);
router.route("/signin").post(UserAuthControllers.UserSigninController);

module.exports = router;
