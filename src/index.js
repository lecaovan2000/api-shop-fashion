const express = require("express");
const app = express();
const connectDb = require("./config/db");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const productRouter = require("./routes/productRouter");

connectDb.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/images", express.static("src/imgUploads"));

app.use("/api/v1/product", productRouter);

app.listen(8000, () => console.log("Server started on port 8000"));
