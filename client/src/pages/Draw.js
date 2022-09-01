import { CanvasProvider } from "../components/CanvasStuff/CanvasContext";
import { Canvas } from "../components/CanvasStuff/Canvas";
import { ClearCanvasButton } from "../components/CanvasStuff/ClearCanvasButton";
import { UndoCanvasButton } from "../components/CanvasStuff/UndoCanvasButton";

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
