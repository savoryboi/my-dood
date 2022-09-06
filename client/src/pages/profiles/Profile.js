import "./profile.css";
// import { useState } from "react";

import { useQuery, gql } from "@apollo/client";
import { GET_ONE_USER } from "../../utils/queries";

function Profile({ user }) {
  const { error, loading, data } = useQuery(GET_ONE_USER, {
    variables: user
  });
  console.log(data);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(user);
  return (
    <div className="user-profile">
      <div className="profile-container">
        <img
          className="user-img"
          src="https://p.kindpng.com/picc/s/137-1371319_shrek-meme-birthday-card-shrek-emoji-png-transparent.png"
        />
        <div className="user-name">
          {user.userName}
        </div>
        <div className="profile-info">
          <p id="user-bio">
            {user.bio}
          </p>
        </div>
      </div>

      {data &&
        <div className="user-posts">
          {data.getOneUser.posts.map((post, index) =>
            <div key={index} className="post-card">
              <img src={post.postPic} />
            </div>
          )}
        </div>}

      <div className="friends-list">
        {data &&
          <ul>
            {data.getOneUser.friends.map((friend, index) =>
              <li key={friend._id}>
                {friend.userName}
              </li>
            )}
          </ul>}
      </div>
    </div>
  );
}

export default Profile;
