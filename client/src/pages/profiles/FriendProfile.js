

function FriendProfile() {
  return (
    <div className= "profile-container">
      <img className= "user-img" src=""></img>
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

export default FriendProfile
