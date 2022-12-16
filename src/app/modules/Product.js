const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  title: { type: String },
  price: { type: String },
  categorySlug: { type: String },
  colors: { type: Array },
  slug: { type: String },
  size: { type: Array },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", Product);
