import "./App.css";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import FriendsList from "./components/FriendsList";
import Draw from "./pages/Draw";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import FriendProfile from "./pages/FriendProfile";
import AuthForm from "./pages/AuthForm";


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
  );
}

export default App;
