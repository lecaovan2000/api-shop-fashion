const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String },
  price: { type: String },
  categorySlug: { type: String },
  colors: { type: Array },
  img_avatar: {
    image01: {
      type: String,
      required: true,
    },
    image02: {
      type: String,
      required: true,
    },
  },
  slug: { type: String },
  size: { type: Array },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
