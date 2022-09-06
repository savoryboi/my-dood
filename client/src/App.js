import "./App.css";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import { isAuthenticated } from "./utils/auth";
import Protect from "./components/Protect";
import Landing from "./pages/Landing";
import AuthForm from "./pages/AuthForm/AuthForm";
import Draw from "./pages/Draw/Draw";
import Profile from "./pages/profiles/Profile";
import Timeline from "./components/Timeline/Timeline";
import Search from "./pages/Search/Search";
import Word from "./components/Word";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const user_data = isAuthenticated();

  //   if (user_data) setUser(user_data);
  // }, []);
  return (
    <div className="app">
      <Protect setUser={setUser}>
        <Header />
        <Routes>
          <Route path="/" element={<Landing user={user} />} />
          <Route
            path="/auth-form"
            element={
              <div>
                <Word />
                <AuthForm />
              </div>
            }
          />
          <Route path="/Draw" element={<Draw setUser={setUser} />} />
          <Route
            path="/Profile"
            element={
              <div>
                <Word />
                <Profile user={user} />
              </div>
            }
          />
          <Route
            path="/Timeline"
            element={
              <div>
                <Word />
                <Timeline user={user} />
              </div>
            }
          />{" "}
          <Route path="/Search" element={<Search user={user} />} />
        </Routes>
      </Protect>
    </div>
  );
}

export default App;
