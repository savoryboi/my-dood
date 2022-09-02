import React from "react";
import { useCanvas } from "./CanvasContext";

export const CanvasButtons = () => {
  const {
    undoLast,
    clearCanvas,
    changeColor,
    changeWeight,
    save
  } = useCanvas();

  return (
    <div className="drawButtons">
      <div id="colors">
        <div>
          <button
            onClick={() => changeColor("white")}
            class="colorButton"
            id="white"
          />
          <button
            onClick={() => changeColor("black")}
            class="colorButton"
            id="black"
          />
          <button
            onClick={() => changeColor("brown")}
            class="colorButton"
            id="brown"
          />
        </div>
        <div>
          <button
            onClick={() => changeColor("red")}
            class="colorButton"
            id="red"
          />
          <button
            onClick={() => changeColor("orange")}
            class="colorButton"
            id="orange"
          />
          <button
            onClick={() => changeColor("yellow")}
            class="colorButton"
            id="yellow"
          />
        </div>
        <div>
          <button
            onClick={() => changeColor("blue")}
            class="colorButton"
            id="blue"
          />
          <button
            onClick={() => changeColor("green")}
            class="colorButton"
            id="green"
          />
          <button
            onClick={() => changeColor("purple")}
            class="colorButton"
            id="purple"
          />
        </div>
      </div>
      <div>
        <div id="revise">
          <button onClick={undoLast}><i className="fa-solid fa-rotate-left"></i></button>
          <button onClick={clearCanvas}><i className="fa-solid fa-trash-can"></i></button>
          <button onClick={save}><i className="fa-solid fa-paper-plane"></i></button>
        </div>
        <div>
          <div>
            <input
              id="picker"
              type="color"
              value="color"
              onChange={e => changeColor(e.target.value)}
            />
          </div>
          <div>
            <input
              type="range"
              min="3"
              max="20"
              defaultValue="5"
              id="pen-range"
              onChange={e => changeWeight(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
