import "./Draw.css";
import { CanvasProvider } from "../../components/CanvasStuff/CanvasContext";
import { Canvas } from "../../components/CanvasStuff/Canvas";
import { CanvasButtons } from "../../components/CanvasStuff/CanvasButtons";
import { useEffect } from "react";
import { isAuthenticated } from "../../utils/auth";

function Draw(props) {
  useEffect(() => {
    const user_data = isAuthenticated();

    if (user_data) props.setUser(user_data);
  }, []);
  return (
    <CanvasProvider id="draw">
      <h2>Word</h2>
      <div className="canvascontainer">
        <Canvas />
        <CanvasButtons />
      </div>
    </CanvasProvider>
  );
}

export default Draw;
