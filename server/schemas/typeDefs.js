const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        email: String!
        friends: [User]
    }

    type Post {
        _id: ID!
        img: String!
        text: String!
        # user_id??? need to know what properties on here
    }

    type Auth {
        user: User
        token: ID
    }

    type Query {
        getPosts: [Post]
    }

    type Mutation {
        addUser(email: String!, password: String!): Auth
        addPost(img: String!, text: String!): Post
    }

    

`

module.exports = typeDefs;