import React, { useContext, useRef, useState } from "react";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const [undoArray, setUndoArray] = useState([]);
  const [index, setIndex] = useState(-1);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const startFill = "white";

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 800;
    // canvas.width = window.innerWidth * 2;
    // canvas.height = window.innerHeight * 2;
    // canvas.style.width = `${window.innerWidth}px`;
    // canvas.style.height = `${window.innerHeight}px `;

    const context = canvas.getContext("2d");
    context.scale(2, 2);

    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;

    // setUndoArray(context.getImageData(0, 0, canvas.width, canvas.height));
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setUndoArray(
      undoArray => [
        ...undoArray,
        context.getImageData(0, 0, canvas.width, canvas.height)
      ],
      console.log(undoArray)
    );
    setIndex(index + 1);
    console.log(context.getImageData(0, 0, canvas.width, canvas.height));
    console.log(index);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = startFill;
    context.fillRect(0, 0, canvas.width, canvas.height);
    setUndoArray([]);
    setIndex(-1);
  };

  const undoLast = async () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (undoArray.length <= 1) {
      clearCanvas();
      return;
    }

    setUndoArray(undoArray.slice(0, -1));
    return context.putImageData(undoArray[undoArray.length - 2], 0, 0);
  };

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        draw,
        undoLast
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);
