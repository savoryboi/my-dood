import "./App.css";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import FriendsList from "./components/FriendsList";
import Draw from "./pages/Draw";
import { Canvas } from "./components/Canvas";
import { ClearCanvasButton } from "./components/ClearCanvasButton";
import { UndoCanvasButton } from "./components/UndoCanvasButton";
function App() {
  return (
    <div>
      <Canvas />
      <ClearCanvasButton />
      <UndoCanvasButton />zw
    </div>
  );
}

export default App;
