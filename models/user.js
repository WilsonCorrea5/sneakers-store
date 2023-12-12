const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  specialBrandsPrices: [
    {
      type: Schema.Types.ObjectId,
      ref: "Brand",
    },
  ],
});

module.exports = model("User", UserSchema);
