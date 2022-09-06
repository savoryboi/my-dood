import "./profile.css";
// import { useState } from "react";

import { useQuery, gql } from "@apollo/client";
import { USER_POSTS } from "../../utils/queries";

function Profile({ user }) {
  const { error, loading, data } = useQuery(USER_POSTS, {
    variables: user
  });
  console.log(data);

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../components/images", false, /\.(png|jpe?g|svg)$/)
  );

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
              <img src={images[post.postPic]} />
            </div>
          )}
        </div>}

      <div className="friends-list" />
    </div>
  );
}

export default Profile;
