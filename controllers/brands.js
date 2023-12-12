const { response } = require("express");
const Brand = require("../models/brand");

const getBrands = async (req, res = response) => {
  const brands = await Brand.find();
  res.json({
    ok: true,
    brands,
  });
};

module.exports = getBrands;
