import "./App.css";
import Header from "./components/Header/Header";
import Timeline from "./components/Timeline/Timeline";
import FriendsList from "./components/FriendsList";
import Landing from "./pages/main/Landing";
import Draw from "./pages/Draw/Draw";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/main/Home";
import FriendProfile from "./pages/profiles/FriendProfile";
import Profile from './pages/profiles/Profile'


function App() {
  return (
    <div className="app">
      <Header />
      {/* <Landing /> */}
      <Routes>
      <Route path="/" element={<Draw />}/>
      <Route path="/Profile" element={<Profile />}/>
      <Route path="/timeline" element={<Timeline />} />
    
      </Routes>
    </div>
  );
}

export default App;
