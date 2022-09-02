import "./App.css";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import FriendsList from "./components/FriendsList";
import Landing from "./pages/Landing"
import Draw from "./pages/Draw";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FriendProfile from "./pages/FriendProfile";
import AuthForm from "./pages/AuthForm";
<<<<<<< HEAD
import Protect from './components/Protect.js';



function App() {
  return (
    <div>

    <Header logo={logo} user={user} />

    <Routes>
      <Route path="/" element={<Protect>
        <Landing user={user} />
      </Protect>} />

      <Route path="/AuthForm" element={<Protect>
        <AuthForm setUser={setUser} />
      </Protect>} />

      <Route path="/Profile" element={<Protect>
      </Protect>} />


      {/* if logged in then landing page becomes home page */}
      <Route path="/" element={<Protect>
        <Home />
      </Protect>} />

      <Route path="/FriendProfile" element={<Protect>
        <FriendProfile />
      </Protect>} />
      
      <Route path="/Draw" element={<Protect>
        <Draw />
      </Protect>} />
    </Routes>
  </div>
=======
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="app">
      <Draw />

      {/* <Routes>
        <Route
          path="/"
          element={
            <Protect>
              <Landing user={user} />
            </Protect>
          }
        />
        <Route
          path="/AuthForm"
          element={
            <Protect>
              <AuthForm setUser={setUser} />
            </Protect>
          }
        />

        <Route
          path="/"
          element={
            <Protect>
              <Home />
            </Protect>
          }
        />
        <Route
          path="/FriendProfile"
          element={
            <Protect>
              <FriendProfile />
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
      </Routes> */}
    </div>
>>>>>>> 1a3bd6e267f871dc066a39159ac3dc7eff329eaa
  );
}

export default App;
