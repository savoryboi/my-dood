import { useQuery, useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { ADD_FRIEND } from "../utils/mutations";
import { GET_NAMEID } from "../utils/queries";

function Search({ user }) {
  const [friend, setFriend] = useState({
    _id: "",
    friendId: "",
  });
  const [userList, setUserList] = useState();

  //   setFriend({ _id: user._id });
  function addToFriends(_id) {
    setFriend({ _id: user._id, friendId: _id });
  }
  //   const test = () => {
  //     console.log("hi");
  //   };
  // const { error, loading } = useMutation(ADD_FRIEND, {
  //   variables: _id,
  // });

  const { error, loading, data } = useQuery(GET_NAMEID);

  return (
    <div>
      <input type="text" placeholder="Search users" />
      {data && (
        <div className="">
          {data.getAllUsers.map((searchedUsers, index) => (
            <div key={index}>
              <h3>{searchedUsers.userName}</h3>
              <button value={searchedUsers._id} onChange={addToFriends}>
                Follow
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
