import { CanvasProvider } from "../components/CanvasContext";
import { Canvas } from "../components/Canvas";
import { ClearCanvasButton } from "../components/ClearCanvasButton";
import { UndoCanvasButton } from "../components/UndoCanvasButton";

function Draw() {
  return (
    <CanvasProvider>
      <Canvas />
      <ClearCanvasButton />
      <UndoCanvasButton />
    </CanvasProvider>
  );
}

export default Draw;
