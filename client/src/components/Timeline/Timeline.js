import { useEffect, useState } from 'react';
import { ApolloError, useQuery } from '@apollo/client';
import './Timeline.css';
import { GET_ONE_USER } from '../../utils/queries';

function Timeline({user}) {
  const { data, loading, error } = useQuery(GET_ONE_USER, {
    variables: user
  });

  if(loading) return 'Loading timeline...';
  if(error) throw new ApolloError('Uh oh!');

  

    return (
      <main className='timeline'>
        {data &&
          <div>
            {data.getOneUser.friends.forEach(friend =>
            
              friend.posts.map((post, index) => {
                <div className='post-card' key={index}>
                  <img src={post.postPic}></img>
                </div>
              })
            )}
          </div>}
      </main>
    )
}

export default Timeline;