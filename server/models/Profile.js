const { Schema, model } = require("mongoose");
const User = require("./User");

const profileSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    max: 150
  },
  posts: {
    ref: User.posts
  }
});

module.exports = profileSchema;
