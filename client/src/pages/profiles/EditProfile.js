import './profile.css'
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { EDIT_PROFILE} from "../../utils/mutations";
import { FIND_USER } from '../../utils/queries';
const jwt = require("jsonwebtoken");



function EditProfile(props) {

  
  
  const [formInput, setFormInput] = useState({
    userName: "",
    bio: "",
  });
  const [edit] = useMutation(EDIT_PROFILE, {
    variables: formInput
  });
  const [id] = useQuery(FIND_USER, {
    variables: formInput
  });
  
  const token = localStorage.getItem('token');
  token = token.split(" ").pop().trim();
  let query = id
  if (token) {
    const { userData, exp } = jwt.decode(token);

    const user = query()

    if (exp < Date.now() / 1000 || !user)
      return res
        .status(401)
        .send({ message: "You must sign in to create a post" });
  }

  const navigate = useNavigate();
  
  const handleSubmit = async e => {
    e.preventDefault();
  
    let mutation = edit
  
    const { data } = await mutation();

    user = data[type].user;
    // token = data[type].token;

    props.setUser(user);

    navigate("/Draw");
    }



const handleInputChange = e => {
  setFormInput({
    ...formInput,
    [e.target.name]: e.target.value
  });
};
  return (
    <form onSubmit={handleSubmit}>
      <h2 className='edit-profile-text'> Edit Profile</h2>
      <div className='edit-forms'>
        <h3 className='edit-profile-text1'> Edit Your Display Name</h3>
        <input
        name="userName"
        value={formInput.userName}
        onChange={handleInputChange}
        type="userName"
        placeholder="Enter your email address"
      />
        <h3 className='edit-profile-text1'> Edit Your Bio</h3>
      <input
        name="bio"
        value={formInput.bio}
        onChange={handleInputChange}
        type="bio"
        placeholder="Enter your password"
      />
      </div>
         <button>update</button>
    </form>
  );
}

export default EditProfile;
