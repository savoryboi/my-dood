const Users = require('../models/Users');
const Posts = require('../models/Posts');
const Users = require('../models/Users');

const resolvers = {
    Query: {
        async getAllPosts() {
            return await Posts.find();
        },
        async getOnePost(_, args) {
            return await Posts.findById(args.id);
        },
        async getAllUsers() {
            return await Users.find();
        },
        async getOneUser(_, args) {
            return await Users.findById(args.id)
        }
    },

    Mutation: {
        async addUser(_, { email, password }) {
            return await Users.create({
                email,
                password
            })
        },
        async addPost(_, { post_text, post_pic }) {
            return await Posts.create({
                post_text,
                post_pic
            })
        }
    }
};

module.exports = resolvers;