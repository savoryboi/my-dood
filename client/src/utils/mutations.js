import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      user {
        email
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
      }
      token
    }
  }
`;

export const EDIT_PROFILE = gql`
  mutation edit($_id: ID!, $userName: String!, $bio: String!) {
    user(_id: $id) {
      profile(userName: $userName, bio: $bio) {
        userName
        bio
      }
    }
    token
  }
`;
