const express = require("express");
const router = express.Router();
const authRoutes = require("./AuthRoutes");
const cartRoutes = require("./cartRoutes");

router.use("/auth", authRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
