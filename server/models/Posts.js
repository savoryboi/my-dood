const { Schema, model } = require('mongoose');


// THIS IS HOW TO CONVERT BINARY TO AN IMAGE AGAIN

{/* <img src={`data:image/jpeg;base64,${binary_data}`} /> */}

const postSchema = new Schema({
  post_text: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  post_pic: {
    img:
    {
        data: Buffer,
        contentType: String
    }
  }
});

const post = model('Post', postSchema);

module.exports = post;