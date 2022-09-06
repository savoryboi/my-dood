import "./AuthForm.css";
import axios from "axios";
import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_ONE_USER } from "../../utils/queries";

import { ADD_USER, LOGIN_USER } from "../../utils/mutations";
// import { GET_USER } from "../utils/queries";

function AuthForm(props) {
  // let wotd = document.getElementById("wotd").innerText;

  const [img, setImg] = useState();

  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    username: "",
    bio: "",
    profilePic: "",
    type: "login"
  });

  const onImageChange = e => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    const form = new FormData();
    form.append("image", file);
    axios
      .post("/api/profilePic", form, config)
      .then(res => {
        const z = res.data;
        console.log(z);
        return z;
      })
      .then(path => {
        return setFormInput({
          ...formInput,
          profilePic: path
        });
      });
  };

  // const { getOne } = useQuery(GET_ONE_USER, {
  //   variables: user
  // });

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

    // if (formInput.type === "register") {
    navigate("/Draw");
    // }
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
