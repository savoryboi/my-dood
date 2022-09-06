import { gql } from "@apollo/client";

export const USER_POSTS = gql`
  query getOneUser($id: ID!) {
    getOneUser(id: $id) {
      posts {
        postPic
      }
    }
  }
`;
export const GET_USER = gql`
  query getUserByEmail($email: String!) {
    getOneUser(email: $email) {
      _id
      email
      posts {
        postPic
      }
    }
  }
`;
export const GET_NAMEID = gql`
  query getAllUsers {
    getAllUsers {
      _id
      userName
    }
  }
`;
