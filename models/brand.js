const { Schema, model } = require("mongoose");

const BrandSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = model("Brand", BrandSchema);
