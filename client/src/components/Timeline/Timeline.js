import { useEffect, useState } from 'react';
import { ApolloError, useQuery } from '@apollo/client';
import './Timeline.css';
import { GET_ONE_USER } from '../../utils/queries';
import Word from '../Word';

function Timeline({user}) {
  const { data, loading, error } = useQuery(GET_ONE_USER, {
    variables: user
  });

  // if(data) console.log(data.getOneUser.friends[0].posts[0].postPic);
  if(loading) return 'Loading timeline...';
  if(error) throw new ApolloError('Uh oh!');

  console.log(data)
  console.log(Word)

  if(data.getOneUser.friends.length === 0){
    return (
      <div>
        <h1>How sad! You have no friends!</h1>
        <a href='/Search'>click to find some...</a>
      </div>
    )
  } else {
    // if()
    return (
      <main className='timeline'>
       <Word />
        {data &&
          data.getOneUser.friends.map(friend => {
           return (<div key={friend._id} className='post-card'>
            <h3 className='user-display'>{friend.userName}</h3>
  
            {friend.posts.map((post) => {
             return <img className='tl-dood' key={post._id} src={post.postPic}></img>
            })}
  
            </div>)
          })
          }
      </main>
    )
  }
  

}

export default Timeline;