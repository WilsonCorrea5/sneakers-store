const { response } = require("express");
const Product = require("../models/product");

const getProducts = async (req, res = response) => {
  const products = await Product.find({ stock: { $gt: 0 } }).populate(
    "brand",
    "name"
  );
  res.json({
    ok: true,
    products,
  });
};

module.exports = getProducts;
