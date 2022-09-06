import "./AuthForm.css";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ADD_USER, LOGIN_USER } from "../../utils/mutations";
// import { GET_USER } from "../utils/queries";

function AuthForm(props) {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    username: "",
    bio: "",
    type: "login"
  });
  const [addUser] = useMutation(ADD_USER, {
    variables: formInput
  });
  const [loginUser] = useMutation(LOGIN_USER, {
    variables: formInput
  });

  const navigate = useNavigate();

  let register = false;
  if (formInput.type === "register") {
    register = true;
  } else {
    register = false;
  }
  const handleSubmit = async e => {
    e.preventDefault();

    let user, token;
    let mutation = formInput.type === "register" ? addUser : loginUser;
    let type = formInput.type === "register" ? "addUser" : "loginUser";
    const { data } = await mutation();

    user = data[type].user;
    token = data[type].token;
    localStorage.setItem("token", token);
    navigate("/Draw");
  };

  const handleInputChange = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>
        {formInput.type[0].toUpperCase() + formInput.type.slice(1)}
      </h1>
      <div className="authInput">
        <h3>Email</h3>
        <input
          name="email"
          value={formInput.email}
          onChange={handleInputChange}
          type="email"
          placeholder="Enter your email address"
        />
        <h3>Password</h3>

        <input
          name="password"
          value={formInput.password}
          onChange={handleInputChange}
          type="password"
          placeholder="Enter your password"
        />
      </div>

      {register
        ? <div className="authInput">
            <h3>Username</h3>

            <input
              name="userName"
              value={formInput.userName}
              onChange={handleInputChange}
              type="userName"
              placeholder="Enter your username"
            />
            <h3>Bio</h3>

            <input
              name="bio"
              value={formInput.bio}
              onChange={handleInputChange}
              type="bio"
              placeholder="Enter your bio"
            />
          </div>
        : <div />}

      <div className="type-wrap">
        {register
          ? <label htmlFor="login">
              Already a user? Login
              <input
                checked={formInput.type === "login"}
                onChange={handleInputChange}
                name="type"
                id="login"
                type="radio"
                value="login"
              />
            </label>
          : <label htmlFor="register">
              New to MyDood? Register
              <input
                checked={formInput.type === "register"}
                onChange={handleInputChange}
                name="type"
                id="register"
                type="radio"
                value="register"
              />
            </label>}
      </div>
      <button>Submit</button>
    </form>
  );
}

export default AuthForm;
