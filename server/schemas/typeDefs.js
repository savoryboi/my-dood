const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    friends: [User]
    posts: [Post]
  }

  type Post {
    _id: ID!
    post_pic: String!
    post_text: String!
    # user_id??? need to know what properties on here
  }

  type Auth {
    user: User
    token: ID
  }

  type Query {
    getAllPosts: [Post]
    getOnePost(id: ID!): Post
    getAllUsers: [User]
    getOneUser(id: ID!): User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth!
    addPost(post_pic: String!, post_text: String!): Post!
  }
`;

module.exports = typeDefs;
