const User = require("../models/User");
const Post = require("../models/Post");
const { signToken } = require("../auth");
const { ApolloError } = require("apollo-server-express");

const resolvers = {
  Query: {
    async getAllPosts() {
      return await Post.find();
    },
    async getOnePost(_, { args }) {
      return await Post.findById(args.id);
    },
    async getAllUsers() {
      return await User.find().populate("posts");
    },
    async getOneUser(_, args) {
      return await User.findById(args.id).populate("posts");
    },
    async getUserByEmail(_, args) {
      return await User.findBy(args.email).populate("posts");
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

    async loginUser(_, { email, password }, context) {
      const user = await User.findOne({ email });

      if (!user) throw new ApolloError("No user found with that email address");

      if (!user.validatePass(password))
        throw new ApolloError("Your password is incorrect");

      try {
        const token = signToken(user);

        return { user, token };
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async addPost(_, { postText, postPic }) {
      return await Post.create({
        postText,
        postPic
      });
    },
    async edit(_, { userName, bio }, context) {
      try {
        const profile = await Profile.create({ userName, bio });

        const token = signToken(profile);
        return { profile, token };
      } catch (err) {
        throw new ApolloError(err);
      }
    },
  }
};

module.exports = resolvers;
