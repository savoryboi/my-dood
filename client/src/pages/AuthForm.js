import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ADD_USER, LOGIN_USER } from "../utils/mutations";
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

  const handleSubmit = async e => {
    e.preventDefault();

    let user, token;
    let mutation = formInput.type === "register" ? addUser : loginUser;
    let type = formInput.type === "register" ? "addUser" : "loginUser";

    const { data } = await mutation();

    user = data[type].user;
    token = data[type].token;
    localStorage.setItem("token", token);

    // const [error, loading, getUser] = useLazyQuery(GET_USER, {
    //   variables: user
    // });

    // let query = getUser;
    // const { userObj } = await query();
    // if (loading) return "Loading...";
    // if (error) return `Error! ${error.message}`;

    // console.log(userObj);

    // props.setUser(user);


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
      <input
        name="email"
        value={formInput.email}
        onChange={handleInputChange}
        type="email"
        placeholder="Enter your email address"
      />
      <input
        name="password"
        value={formInput.password}
        onChange={handleInputChange}
        type="password"
        placeholder="Enter your password"
      />


      <div>
        <input
          name="userName"
          value={formInput.userName}
          onChange={handleInputChange}
          type="userName"
          placeholder="Enter your username"
        />
        <input
          name="bio"
          value={formInput.bio}
          onChange={handleInputChange}
          type="bio"
          placeholder="Enter your bio"
        />
      </div>

      <div className="type-wrap">
        <label htmlFor="login">
          Login
          <input
            checked={formInput.type === "login"}
            onChange={handleInputChange}
            name="type"
            id="login"
            type="radio"
            value="login"
          />
        </label>
        <label htmlFor="register">
          Register
          <input
            checked={formInput.type === "register"}
            onChange={handleInputChange}
            name="type"
            id="register"
            type="radio"
            value="register"
          />
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default AuthForm;
