const api_router = require("express").Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/images");
  },
  filename(req, file, cb) {
    cb(null, Date.now() + ".png");
  }
});
const upload = multer({ storage });
const User = require("../models/User");
const Post = require("../models/Post");
const jwt = require("jsonwebtoken");

api_router.post("/api/image", upload.single("image"), async (req, res) => {
  var token = req.headers.authorization;
  token = token.split(" ").pop().trim();
  if (token) {
    const { data, exp } = jwt.decode(token);

    const user = await User.findById(data._id);

    if (exp < Date.now() / 1000 || !user)
      return res
        .status(401)
        .send({ message: "You must sign in to create a post" });

    const post = await Post.create({
      postPic: `images/${req.file.filename}`,
      postText: req.headers.title
    });

    user.posts.push(post._id);
    user.save();

    res.send({ message: "success!" });
  }
});
api_router.post("/api/profilePic", upload.single("image"), async (req, res) => {
  res.send(`images/${req.file.filename}`);
});

module.exports = api_router;
