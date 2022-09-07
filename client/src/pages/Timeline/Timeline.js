import { useEffect, useState } from "react";
import { ApolloError, useQuery } from "@apollo/client";
import "./Timeline.css";
import { GET_ONE_USER } from "../../utils/queries";

function Timeline({ user }) {
  const { data, loading, error } = useQuery(GET_ONE_USER, {
    variables: user
  });
  if (loading) return "Loading timeline...";
  if (error) throw new ApolloError("Uh oh!");

  let wotd = document.getElementById("wotd").innerText;

  if (data.getOneUser.friends.length === 0) {
    return (
      <div className="sad">
        <h1>How sad! You have no friends!</h1>
        <a href="/Search">click to find some...</a>
      </div>
    );
  } else {
    return (
      <main className="timeline">
        {data &&
          data.getOneUser.friends.map(friend => {
            return (
              <div key={friend._id} className="post-card">
                <h3 className="user-display">
                  {friend.userName}
                </h3>

                {friend.posts.map(post => {
                  if (post.postText === wotd) {
                    return (
                      <img
                        className="tl-dood"
                        key={post._id}
                        src={post.postPic}
                      />
                    );
                  } else {
                    return;
                  }
                })}
              </div>
            );
          })}
      </main>
    );
  }
}

export default Timeline;
