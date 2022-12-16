const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const db = require("./config/db");
const Product = require("./app/modules/Product");

db.connect();

const morgan = require("morgan");

app.use(morgan("combined"));

app.get("/", (req, res) => {
  Product.find({}, (err, product) => {
    if (!err) {
      res.json(product);
    } else {
      res.status(400).json({ error: "looi" });
    }
  });
});
app.listen(port, () => console.log("Server da duoc tao"));
