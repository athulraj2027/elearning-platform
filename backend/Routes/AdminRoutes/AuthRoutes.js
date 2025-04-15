const express = require("express");
const router = express.Router();

const AdminAuthControllers = require("../../Controllers/AdminControllers/AdminAuthControllers");

router.route("/signin").post(AdminAuthControllers.AdminSigninController);

module.exports = router;
