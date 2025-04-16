const express = require("express");
const router = express.Router();
const CouponController = require("../../Controllers/AdminControllers/CouponController");

router.route("/add").post(CouponController.AddCouponController);
router.route("/edit/:id").put(CouponController.EditCouponController);
router
  .route("/toggle-status/:id")
  .post(CouponController.ToggleCouponStatusController);

module.exports = router;
