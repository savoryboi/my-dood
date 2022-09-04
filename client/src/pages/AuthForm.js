import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ADD_USER, LOGIN_USER } from "../utils/mutations";

function AuthForm(props) {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    type: "register"
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
    props.setUser(user);

    navigate("/Draw");
  };

  const handleInputChange = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="landing">
      <h1>Welcome to MyDood, my dude!</h1>
      <div className="container">
        {/* <form onSubmit={handleLogin} className="login-form">
          <input
            name="email"
            value={formInput.email}
            onChange={handleInputChange}
            type="email"
            placeholder="enter your email"
          />
          <input
            name="password"
            value={formInput.password}
            onChange={handleInputChange}
            type="password"
            placeholder="enter your password"
          />
          <button>Login</button>
        </form> */}

        <form onSubmit={handleSubmit} className="register-form">
          <input
            name="email"
            value={formInput.email}
            onChange={handleInputChange}
            type="email"
            placeholder="enter your email"
          />
          <input
            name="password"
            value={formInput.password}
            onChange={handleInputChange}
            type="password"
            placeholder="enter your password"
          />
          <button>Register</button>
        </form>
      </div>
    </main>
  );
}

export default AuthForm;
