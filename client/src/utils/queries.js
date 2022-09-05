import { gql } from "@apollo/client";

export const USER_POSTS = gql`
  query userPosts($getOneUserId: ID!) {
    getOneUser(id: $getOneUserId) {
      posts {
        postPic
      }
    }
  }
`;
