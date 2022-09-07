import "./profile.css";
import { useQuery, gql } from "@apollo/client";
import { GET_ONE_USER } from "../../utils/queries";

function Profile({ user }) {
  const { error, loading, data } = useQuery(GET_ONE_USER, {
    variables: user
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className="user-profile">
      <div className="profile-container">
        <img className="user-img" src={user.profilePic} />
        <div className="user-name">
          {user.userName}
        </div>
        <p id="user-bio">
          {user.bio}
        </p>
        <div className="friends-list">
          {data &&
            <ul>
              <span>MyDudes</span>
              {data.getOneUser.friends.map((friend, index) =>
                <li key={friend._id}>
                  {friend.userName}
                </li>
              )}
            </ul>}
        </div>
      </div>

      {data &&
        <div className="user-posts">
          {data.getOneUser.posts.map((post, index) =>
            <div key={index} className="post-card">
              <h3 className="user-display">
                {post.postText}
              </h3>
              <img className="tl-dood" src={post.postPic} />
            </div>
          )}

          <div id="myDoods">MyDoods</div>
        </div>}
    </div>
  );
}

export default Profile;
