import React from "react";
import { useCanvas } from "./CanvasContext";

export const CanvasButtons = () => {
  const { undoLast, clearCanvas, changeColor, changeWeight } = useCanvas();

  return (
    <div className="drawButtons">
      <button onClick={undoLast}>Undo</button>
      <button onClick={clearCanvas}>Clear</button>
      <button onClick={() => changeColor("black")}>Black</button>
      <button onClick={() => changeColor("red")}>Red</button>
      <button onClick={() => changeColor("green")}>Green</button>
      <button onClick={() => changeColor("blue")}>Blue</button>
      <input
        type="color"
        value="color"
        onChange={e => changeColor(e.target.value)}
      />
      <input
        type="range"
        min="3"
        max="20"
        defaultValue="5"
        class="pen-range"
        onChange={e => changeWeight(e.target.value)}
      />
    </div>
  );
};
