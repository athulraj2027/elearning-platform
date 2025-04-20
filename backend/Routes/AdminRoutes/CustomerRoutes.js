const express = require("express");
const router = express.Router();
const CustomerController = require("../../Controllers/AdminControllers/CustomerControllers");

router.route("/").get(CustomerController.getCustomersController);

module.exports = router