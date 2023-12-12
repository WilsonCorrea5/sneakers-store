const { response } = require("express");
const Product = require("../models/product");
const User = require("../models/user");
const { default: mongoose } = require("mongoose");

const isObjectIdValid = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

const getPrice = async (req, res = response) => {
  const { userId, productName } = req.params;
  const isValid = isObjectIdValid(userId);
  if (isValid) {
    const user = await User.findById(userId).populate("specialBrandsPrices");
    const product = await Product.find({ name: productName }).populate(
      "brand",
      "name"
    );
    if (user && product.length) {
      if (user.specialBrandsPrices.length) {
        const hasSpecialPrice = user.specialBrandsPrices.some(
          (item) => item.name === product[0].brand.name
        );
        res.json({
          ok: true,
          price: hasSpecialPrice
            ? product[0].specialPrice
            : product[0].basePrice,
        });
      } else {
        res.json({
          ok: true,
          price: product[0].basePrice,
        });
      }
    } else {
      res
        .json({
          ok: true,
          msg: "user or product doesn't exist",
        })
        .status(400);
    }
  } else {
    res
      .json({
        ok: false,
        msg: "error: User id is invalid",
      })
      .status(500);
  }
};

module.exports = getPrice;
