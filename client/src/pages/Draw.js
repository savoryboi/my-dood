import { CanvasProvider } from "../components/CanvasContext";
import { Canvas } from "../components/Canvas";

function Draw() {
  <CanvasProvider>
    <Canvas />
  </CanvasProvider>;
}

export default Draw;
