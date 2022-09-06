import "./App.css";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import { isAuthenticated } from "./utils/auth";
import Protect from "./components/Protect";
import Landing from "./pages/Landing";
import AuthForm from "./pages/AuthForm/AuthForm";
// import EditProfile from "./pages/profiles/EditProfile";
import Draw from "./pages/Draw/Draw";
import Profile from "./pages/profiles/Profile";
import Timeline from "./components/Timeline/Timeline";
import Home from "./pages/main/Home";
import Search from "./pages/Search";
import UploadTest from "./pages/UploadTest";
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
          <Route path="/auth-form" element={<AuthForm />} />
          {/* <Route
            path="/EditProfile"
            element={<EditProfile setUser={setUser} />}
          /> */}
          <Route path="/Draw" element={<Draw setUser={setUser} />} />
          <Route path="/Profile" element={<Profile user={user} />} />
          <Route path="/Timeline" element={<Timeline user={user} />} />
          <Route path="/Search" element={<Search user={user} />} />
          <Route path="/Upload" element={<UploadTest user={user} />} />
        </Routes>
      </Protect>
    </div>
  );
}

export default App;
