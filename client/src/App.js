import "./App.css";
import Header from "./components/Header/Header";
import Timeline from "./components/Timeline";
import FriendsList from "./components/FriendsList";
<<<<<<< HEAD
import Landing from "./pages/Landing";
import Draw from "./pages/Draw";
=======
import Landing from "./pages/Landing"
import Draw from "./pages/Draw/Draw";
>>>>>>> e6c645a7810148d20d0a7ed360e12ff2bf6cb264
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FriendProfile from "./pages/FriendProfile";
import AuthForm from "./pages/AuthForm";

// import Landing from "./pages/Landing";

function App() {
  return (
    <div className="app">
<<<<<<< HEAD
      <Draw />

=======
      <Header />
      {/* <Draw /> */}
      
>>>>>>> e6c645a7810148d20d0a7ed360e12ff2bf6cb264
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
  );
}

export default App;
