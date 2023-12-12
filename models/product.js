const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  basePrice: {
    type: Number,
    min: 0,
    required: true,
  },
  specialPrice: {
    type: Number,
    min: 0,
    required: true,
  },
  stock: {
    type: Number,
    min: 0,
    required: true,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
    require: true,
  },
});

module.exports = model("Product", ProductSchema);
