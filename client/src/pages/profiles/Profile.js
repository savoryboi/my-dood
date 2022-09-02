

function Profile() {
  return (
    <div className= "profile-container">
      <img className= "user-img" src="https://p.kindpng.com/picc/s/137-1371319_shrek-meme-birthday-card-shrek-emoji-png-transparent.png"></img>
      <div className= "user-name"> Test name</div>
      <div className= "user-info-container">
        <p id= "user-bio1">Bio filler</p>
        <p id= "user-bio2">Bio filler</p>
        <p id= "user-bio3">Bio filler</p>
      </div>
      <div className= "user-posts">
       {/* this will have all the user's posts  */}
      </div>
      <div className="friends-list">

      </div>
    </div>
  )
}

export default Profile