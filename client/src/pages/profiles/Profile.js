import './profile.css';
import { useQuery, gql } from '@apollo/client';

const USER_POSTS = gql`
  query getOneUser {
  getOneUser(id: "6315093390552124d0174057") {
    posts {
      post_pic
    }
  }
}
`;

function Profile() {
  const { error, loading, data } = useQuery(USER_POSTS)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className='user-profile'>
      <div className="profile-container">
        <img className="user-img" src="https://p.kindpng.com/picc/s/137-1371319_shrek-meme-birthday-card-shrek-emoji-png-transparent.png"></img>
        <div className="user-name"> Shrek</div>
        <div className="profile-info">
          <p id="user-bio">big green man swamp onions bugs donkey fiona dragon donkey sex ginger bread man puss in boots</p>
          <p id="user-bio">shrek.com</p>
        </div>
      </div>

      {data && (
        <div className="user-posts">
          {data.getOneUser.posts.map((post, index) => (
            <div key={index} className='post-card'>
              <img src={post.post_pic}/>
            </div>
          )
          )}
        </div>
      )}

      <div className="friends-list">

      </div>

    </div>
  )
}

export default Profile