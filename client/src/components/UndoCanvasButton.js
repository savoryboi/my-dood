import React from "react";
import { useCanvas } from "./CanvasContext";

export const UndoCanvasButton = () => {
  const { undoLast } = useCanvas();

  return <button onClick={undoLast}>undo</button>;
};
