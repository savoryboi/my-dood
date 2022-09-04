const { Schema , model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'You must supply an email address'],
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
    },
    password: {
        type: String,
        required: true
    },
    profile: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]

},
{
    toJSON: {
        virtuals: true
    }
});
userSchema.pre('save', async function () {
    const hashed_pass = await bcrypt.hash(this.password, 10);
    this.password = hashed_pass;
});
userSchema.methods.validatePass = async function (unencryted_password) {
    const valid_pass = await bcrypt.compare(unencryted_password, this.password);
    return valid_pass;
}

const User = model('User', userSchema);

module.exports = User;