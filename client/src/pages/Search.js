import { useQuery, useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { ADD_FRIEND } from "../utils/mutations";
import { GET_NAMEID } from "../utils/queries";

function Search({ user }) {
  const [friend, setFriend] = useState({
    _id: "",
    friendId: "",
  });
  const [searchText, setSearchText] = useState("");
  const [userList, setUserList] = useState();

  //   setFriend({ _id: user._id });
  function addToFriends(_id) {
    setFriend({ _id: user._id, friendId: _id });
  }
  // const { error, loading } = useMutation(ADD_FRIEND, {
  //   variables: _id,
  // });

  const { error, loading, data } = useQuery(GET_NAMEID);

  return (
    <div>
      <input
        type="text"
        placeholder="Search users"
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      {data && (
        <div className="">
          {data.getAllUsers
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.userName.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((searchedUsers, index) => (
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
