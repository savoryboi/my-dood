import './profile.css';

function Profile() {
  return (
    <div className='user-profile'>
    <div className= "profile-container">
      <img className= "user-img" src="https://p.kindpng.com/picc/s/137-1371319_shrek-meme-birthday-card-shrek-emoji-png-transparent.png"></img>
      <div className= "user-name"> Shrek</div>
      <div className= "profile-info">
        <p id= "user-bio">big green man swamp onions bugs donkey fiona dragon donkey sex ginger bread man puss in boots</p>
        <p id= "user-bio">shrek.com</p>
      </div>
    </div>

      <div className= "user-posts"> thing
       {/* this will have all the user's posts  */}
      </div>
      <div className="friends-list">

      </div>

    </div>
  )
}

export default Profile