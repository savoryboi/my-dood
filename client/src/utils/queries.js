import { gql } from '@apollo/client';



export const FIND_USER = gql`
query User($_id: String!) {
    User(_id: $_id,) {
      user {
        _id
      }
    }
  }
`;