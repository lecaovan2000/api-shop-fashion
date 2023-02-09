const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String },
  price: { type: String },
  categorySlug: { type: String },
  colors: { type: Array },
  img_avatar: {
    type: Array,
  },
  slug: { type: Array },
  size: { type: Array },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
