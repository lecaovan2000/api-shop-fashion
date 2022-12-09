const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const morgan = require("morgan");

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("jiji");
});
app.listen(port, () => console.log("Server da duoc tao"));
