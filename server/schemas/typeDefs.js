const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    friends: [User]
    posts: [Post]
  }

  type Post {
    _id: ID!
    post_pic: String
    post_text: String!
    # user_id??? need to know what properties on here
  }

  type Auth {
    user: User
    token: ID
  }

  type Query {
    getAllPosts: [Post]
    getOnePost: Post
    getAllUsers: [User]
    getOneUser: User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    addPost(post_pic: String!, post_text: String!): Post
  }
`;

module.exports = typeDefs;
