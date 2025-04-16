const express = require("express");
const router = express.Router();
const cartController = require("../../Controllers/StudentControllers/CartController");

router.route("/add").post(cartController.AddtoCartController);
router.route("/delete-item").post(cartController.RemoveFromCartController);
router.route("/delete-cart").post(cartController.RemoveFromCartController);

module.exports = router;
