const User = require("../models/User");
const Posts = require("../models/Post");
const { signToken } = require("../auth");
const { ApolloError } = require("apollo-server-express");

const resolvers = {
  Query: {
    async getAllPosts() {
      return await Posts.find();
    },
    async getOnePost(_, args) {
      return await Posts.findById(args.id);
    },
    async getAllUsers() {
      return await User.find().populate('posts');
    },
    async getOneUser(_, args) {
      return await User.findById(args.id).populate('posts')
    }
  },

  Mutation: {
    async addUser(_, { email, password }, context) {
      try {
        const user = await User.create({ email, password });

        const token = signToken(user);
        return { user, token };
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async addPost(_, { post_text, post_pic }) {
      return await Posts.create({
        post_text,
        post_pic
      });
    }
  }
};

module.exports = resolvers;
