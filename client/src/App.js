import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AuthForm from "./pages/AuthForm";
import Home from "./pages/main/Home";
import Draw from "./pages/Draw/Draw";
import Profile from "./pages/profiles/Profile";
import Timeline from "./components/Timeline/Timeline";
import { useState, useEffect } from "react";
import { isAuthenticated } from "./utils/auth";
import Landing from "./pages/Landing";
import Protect from "./components/Protect";

function App() {
  const [logo] = useState("React Overview");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user_data = isAuthenticated();

    if (user_data) setUser(user_data);
  }, []);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Protect>
              <Landing user={user} />
            </Protect>
          }
        />
        <Route
          path="/auth-form"
          element={
            <Protect>
              <AuthForm setUser={setUser} />
            </Protect>
          }
        />
        <Route
          path="/Draw"
          element={
            <Protect>
              <Draw />
            </Protect>
          }
        />
        <Route
          path="/Profile"
          element={
            <Protect>
              <Profile />
            </Protect>
          }
        />
        <Route
          path="/Timeline"
          element={
            <Protect>
              <Timeline />
            </Protect>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
