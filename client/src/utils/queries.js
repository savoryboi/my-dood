import { gql } from "@apollo/client";

export const GET_ONE_USER = gql`
  query getOneUser($id: ID!) {
    getOneUser(id: $id) {
      friends {
        _id
        userName
        posts {
          postPic
          postText
        }
      }
      posts {
        postPic
        postText
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
