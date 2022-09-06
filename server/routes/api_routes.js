const api_router = require("express").Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "../client/src/components/images");
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
      postPic: req.file.path
        .split("..\\client\\src\\components\\images\\")
        .pop()
        .trim(),
      postText: user.email
    });

    user.posts.push(post._id);
    user.save();

    res.send({ message: "success!" });
  }
});

// api_router.get("/images/:pic", async (req, res) => {
//   console.log(req.params.pic);
//   const images = await Post.find({ post_pic: req.params.pic });

//   res.send(images.post_pic);
// });

module.exports = api_router;
