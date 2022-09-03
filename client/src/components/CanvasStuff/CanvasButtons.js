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
            onClick={() => changeColor("#30323d")}
            class="colorButton"
            id="black"
          />
          <button
            onClick={() => changeColor("#642609")}
            class="colorButton"
            id="brown"
          />
        </div>
        <div>
          <button
            onClick={() => changeColor("#C31418")}
            class="colorButton"
            id="red"
          />
          <button
            onClick={() => changeColor("#F76A0E")}
            class="colorButton"
            id="orange"
          />
          <button
            onClick={() => changeColor("#EACD1E")}
            class="colorButton"
            id="yellow"
          />
        </div>
        <div>
          <button
            onClick={() => changeColor("#66AB09")}
            class="colorButton"
            id="green"
          />
          <button
            onClick={() => changeColor("#137DE0")}
            class="colorButton"
            id="blue"
          />
          <button
            onClick={() => changeColor("#8809B5")}
            class="colorButton"
            id="purple"
          />
        </div>
      </div>
      <div>
        <div id="revise">
          <button onClick={undoLast}>
            <i className="fa-solid fa-rotate-left" />
          </button>
          <button onClick={clearCanvas}>
            <i className="fa-solid fa-trash-can" />
          </button>
          <button onClick={save}>
            <i className="fa-solid fa-paper-plane" />
          </button>
        </div>
        <div>
          <div id="picker_div">
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
