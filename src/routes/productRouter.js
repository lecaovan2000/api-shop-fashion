const express = require("express");
const router = express.Router();
const upload = require("./upload");
const productModal = require("../app/modules/Product");

router.get("/get_all", async (req, res, next) => {
  try {
    const getProduct = await productModal.find({});
    res.json({
      error_code: 200,
      message: "Success",
      data: getProduct,
    });
  } catch (error) {
    res.json({
      error_code: 400,
      message: "Server error",
      data: [],
    });
  }
});

router.post("/create", upload.array("img_avatar"), async (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const categorySlug = req.body.categorySlug;
  const colors = req.body.colors;
  const slug = req.body.slug;
  const size = req.body.size;
  const description = req.body.description;

  if (!req.files.length) {
    return res.json({
      error_code: 400,
      message: "Vui long upload file !",
    });
  }
  if (req.files.length > 0 && req.files.length > 2) {
    return res.json({
      error_code: 400,
      message: "Maximum 2 file !",
    });
  }
  let arr_img = [];
  req.files.map((items) =>
    arr_img.push("http://" + req.headers.host + "/images/" + items.filename)
  );
  try {
    const newProduct = await productModal.create({
      title: title,
      price: price,
      categorySlug: categorySlug,
      colors: colors.split(","),
      img_avatar: {
        image01: arr_img[0],
        image02: arr_img[1],
      },
      slug: slug,
      size: size.split(","),
      description: description,
    });
    res.json({
      error_code: 200,
      message: "Success",
      data: newProduct,
    });
  } catch (err) {
    res.json({
      error_code: 400,
      message: "Thong tin nhap khong dung hoac sai, vui long kiem tra lai !",
      data: [],
    });
  }
});

router.post("/update", (req, res) => {
  console.log("data update", req.body.title);
  // try {
  //   const product = await productModal.findByIdAndUpdate(
  //     req.params.id,
  //     req.body,

  //     {
  //       new: false,
  //     }
  //   );
  //   if (!product) {
  //     return res.json({
  //       error_code: 404,
  //       message: "Product not found",
  //       data: [],
  //     });
  //   }
  //   res.json({
  //     error_code: 200,
  //     message: "Success",
  //     data: product,
  //   });
  // } catch (err) {
  //   res.json({
  //     error_code: 500,
  //     message: "Server error",
  //     data: [],
  //   });
  // }
});

module.exports = router;
