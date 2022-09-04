const { Schema, model } = require("mongoose");
const User = require("./User");

const profileSchema = new Schema({
  UserName: {
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
