const api_router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "./public/images" });

api_router.post("/api/image", upload.single("image"), (req, res) => {
  console.log(req.file);
});

module.exports = api_router;
