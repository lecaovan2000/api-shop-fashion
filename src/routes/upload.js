var multer = require("multer");
const path = require("path");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "src/imgUploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
});
module.exports = upload;
