import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./pages/main/Landing";
import Home from "./pages/main/Home";
import Draw from "./pages/Draw/Draw";
import Profile from "./pages/profiles/Profile";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Draw />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Timeline" element={<Timeline />} />
      </Routes>
    </div>
  );
}

export default App;
