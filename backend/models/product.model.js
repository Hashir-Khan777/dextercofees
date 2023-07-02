const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "image is required"],
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    price: {
      type: Number,
      required: [true, "price is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    roastType: {
      type: String,
      required: [true, "roast type is required"],
    },
    quantity: {
      type: Number,
      required: [true, "quantity is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
