const multer = require("multer");

const CategoryStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/Categories/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const CategoryUpload = multer({ storage: CategoryStorage });

module.exports = CategoryUpload