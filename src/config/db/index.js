const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/fashion_shop_db");
    console.log("kết nối db thành công");
  } catch (error) {
    console.log(error);
  }
}
module.exports = { connect };
