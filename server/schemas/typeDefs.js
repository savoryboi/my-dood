const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    profile: [Profile]
    friends: [User]
    posts: [Post]

  }

  type Profile {
    _id: ID!
    userName: String!
    bio: String!
    posts: [Post]
  }

  type Post {
    _id: ID!
    postPic: String!
    postText: String!
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
    loginUser(email: String!, password: String!): Auth!
    addUser(email: String!, password: String!): Auth!
    addPost(postPic: String!, postText: String!): Post!
    edit($userName: String!, $bio: String!): Profile! 
  }
`;

module.exports = typeDefs;
