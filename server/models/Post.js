const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  post_text: {
    type: String,
    required: true,
    min: 1,
    max: 255
  },
  post_pic: {
    type: String,
    required: true,
    min: 1,
    max: 255
  }
});

const post = model("Post", postSchema);

module.exports = post;
