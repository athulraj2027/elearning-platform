const Coupon = require("../../Models/Coupon");

exports.AddCouponController = async (req, res) => {
  const {
    code,
    discountType,
    discountAmount,
    maxDiscount,
    expiryDate,
    startDate,
    usageLimit,
    usedCount,
  } = req.body;

  try {
    const existingCode = await Coupon.findOne({ code });
    if (existingCode)
      return res.status(400).json({ message: "Coupon code already taken" });

    const newCoupon = new Coupon({
      code,
      discountType,
      discountAmount,
      maxDiscount,
      expiryDate,
      startDate,
      usageLimit,
      usedCount,
    });
    if (!newCoupon)
      return res.status(400).json({ message: "Coupon creation failed" });

    await newCoupon.save();
    return res.status(200).json({ message: "Coupon created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Error: error });
  }
};

exports.EditCouponController = async (req, res) => {
  const couponId = req.params.id;
  try {
    const coupon = await Coupon.findByIdAndUpdate(
      couponId,
      {
        code,
        discountType,
        discountAmount,
        maxDiscount,
        expiryDate,
        startDate,
        usageLimit,
        usedCount,
      },
      { new: true }
    );
    if (!coupon) return res.status(400).json({ message: "Coupon not found " });

    await coupon.save();
    return res.status(200).json({ message: "Coupon edited successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Error: error });
  }
};

exports.ToggleCouponStatusController = async (req, res) => {
  const couponId = req.params.id;
  const { status } = req.body;
  if (typeof status !== "boolean") {
    return res.status(400).json({ message: "Status must be true or false" });
  }
  try {
    const coupon = await Coupon.findByIdAndUpdate(
      couponId,
      { isActive: status },
      { new: true }
    );
    if (!coupon) return res.status(400).json({ message: "Coupon not found " });

    await coupon.save();
    return res
      .status(200)
      .json({ message: "Coupon status changed successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Error: error });
  }
};

exports.GetCouponsController = async (req, res) => {
  try {
    const coupons = await Coupon.find({});
    if (!coupons)
      return res.status(400).json({ message: "Couldn't get coupons" });
    return res.status(200).send(coupons);
    
  } catch (error) {
    console.error("Error in loading coupons : ", error);
  }
};
