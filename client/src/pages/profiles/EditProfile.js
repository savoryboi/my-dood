function EditProfile() {
  return (
    <div>
      <h2> Edit Profile</h2>

      <h3> Edit Your Display Name</h3>
      <input
        name="DisplayName"
        value="a"
        onChange="a"
        placeholder="Your display name"
      />

      <h3> Edit Your Bio</h3>
      <input name="bio" value="a" onChange="a" placeholder="Bio" />
    </div>
  );
}

export default EditProfile;
