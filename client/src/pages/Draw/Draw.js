import { CanvasProvider } from "../../components/CanvasStuff/CanvasContext";
import { Canvas } from "../../components/CanvasStuff/Canvas";
import { CanvasButtons } from "../../components/CanvasStuff/CanvasButtons";
import "./Draw.css";

function Draw() {
  return (
    <CanvasProvider>
      <div className="canvascontainer">
        <Canvas />
        <CanvasButtons />
      </div>
    </CanvasProvider>
  );
}

export default Draw;
