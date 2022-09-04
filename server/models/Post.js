const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  postText: {
    type: String,
    required: true,
    min: 1,
    max: 255
  },
  postPic: {
    type: String,
    required: true,
    min: 1,
    max: 255
  }
});

const post = model("Post", postSchema);

module.exports = post;
