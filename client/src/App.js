import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";
// import { isAuthenticated } from "./utils/auth";
import Protect from "./components/Protect";
import AuthForm from "./pages/AuthForm/AuthForm";
import Draw from "./pages/Draw/Draw";
import Profile from "./pages/profiles/Profile";
import Timeline from "./components/Timeline/Timeline";
import Search from "./pages/Search/Search";
import Word from "./components/Word";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      <Protect setUser={setUser}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Word />
                <Timeline user={user} />
              </div>
            }
          />
          <Route path="/auth-form" element={<AuthForm />} />
          <Route path="/Draw" element={<Draw setUser={setUser} />} />
          <Route path="/Profile" element={<Profile user={user} />} />
          <Route path="/Search" element={<Search user={user} />} />
        </Routes>
      </Protect>
    </div>
  );
}

export default App;
