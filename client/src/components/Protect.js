import { useEffect } from "react";
import { isAuthenticated } from "../utils/auth";
import { useNavigate, useLocation } from "react-router-dom";

function Protect(props) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(props);
  useEffect(() => {
    if (
      !isAuthenticated() &&
      location.pathname.match(/\/|Draw|Profile|Timeline/gi)
    )
      navigate("/auth-form");

    if (isAuthenticated() && location.pathname.match(/\/|auth-form/gi));
    // navigate("/Draw");
    const user_data = isAuthenticated();

    if (user_data) props.setUser(user_data);
  }, []);

  return (
    <div>
      {props.children}
    </div>
  );
}

export default Protect;
