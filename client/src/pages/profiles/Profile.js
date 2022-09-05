import "./profile.css";
import { useState } from "react";

import { useQuery } from "@apollo/client";
import { USER_POSTS } from "../../utils/queries";

function Profile(props) {
  const user = props.user;
  const [userProfile, setUserProfile] = useState({
    getOneUserId: ""
  });

  // setUserProfile({ getOneUserId: props.user._id });

  console.log(user._id);

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

  // const [userPosts] = useQuery(USER_POSTS, {
  //   variables: userProfile
  // });

  // async function picture() {
  //   let query = userPosts;

  //   const { data } = await query();

  //   console.log(data);
  // }
  // picture();

  return (
    <div className="user-profile">
      <div className="profile-container">
        <img
          className="user-img"
          src="https://p.kindpng.com/picc/s/137-1371319_shrek-meme-birthday-card-shrek-emoji-png-transparent.png"
        />
        <div className="user-name">
          {user.email}
        </div>
        <div className="profile-info">
          <p id="user-bio">
            big green man swamp onions bugs donkey fiona dragon donkey sex
            ginger bread man puss in boots
          </p>
          <p id="user-bio">shrek.com</p>
        </div>
      </div>

      <div className="user-posts">
        {" "}thing
        <img src={images["1662335200459.png"]} />
      </div>
      <div className="friends-list" />
    </div>
  );
}

export default Profile;
