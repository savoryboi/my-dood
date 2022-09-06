import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_FRIEND } from "../../utils/mutations";
import { GET_NAMEID } from "../../utils/queries";
import './Search.css'

function Search({ user }) {
  const [searchText, setSearchText] = useState("");
  const [userList, setUserList] = useState();

  //   setFriend({ _id: user._id });

  const [addToFriends] = useMutation(ADD_FRIEND);

  const { error, loading, data } = useQuery(GET_NAMEID);

  return (
    <div className="searchDiv">
      <input
        type="text"
        placeholder="Search users"
        onChange={event => {
          setSearchText(event.target.value);
        }}
      />
      {data &&
        <div className="searchResults">
          {data.getAllUsers
            .filter(value => {
              if (searchText === "") {
                return value;
              } else if (
                value.userName.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((searchedUsers, index) =>
              <div className="result-container" key={index}>
                <h3>
                  {searchedUsers.userName}
                </h3>
                <button className="followBtn"
                  onClick={(e) => {
                    e.target.innerText = 'Added!';
                    e.target.style.backgroundColor = 'hotpink';
                    addToFriends({
                      variables: { friendId: searchedUsers._id }
                    })
                  }
                  }
                >
                  Follow
                </button>
              </div>
            )}
        </div>}
    </div>
  );
}

export default Search;
