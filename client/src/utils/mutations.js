import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $password: String!
    $userName: String!
    $bio: String
  ) {
    addUser(
      email: $email
      password: $password
      userName: $userName
      bio: $bio
    ) {
      user {
        email
        userName
      }
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        email
        userName
      }
      token
    }
  }
`;
export const ADD_FRIEND = gql`
  mutation addFriend($friendId: ID!) {
    addFriend(friendId: $friendId) {
      _id
      userName
    }
  }
`;
