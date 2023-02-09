const express = require("express");
const router = express.Router();
const upload = require("./upload");
const productModal = require("../app/modules/Product");
const path = require("path");

router.post("/create", upload.single("img_avatar"), (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const categorySlug = req.body.categorySlug;
  const colors = req.body.colors;
  const slug = req.body.slug;
  const size = req.body.size;
  const description = req.body.description;

  if (!req.file) {
    return res.json({
      error_code: 400,
      message: "Vui long upload file !",
    });
  }
  let arr_img = [];
  arr_img.push("http://" + req.headers.host + "/images/" + req.file.filename);

  productModal
    .create({
      title: title,
      price: price,
      categorySlug: categorySlug,
      colors: colors,
      img_avatar: arr_img,
      slug: slug,
      size: size,
      description: description,
    })
    .then((data) =>
      res.json({
        error_code: 200,
        message: "Success",
        data: data,
      })
    )
    .catch((err) =>
      res.json({
        error_code: 400,
        message: "Thong tin nhap khong dung hoac sai, vui long kiem tra lai !",
        data: [],
      })
    );
});
module.exports = router;
