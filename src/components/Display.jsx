import { useContext } from "react";
import { CalcContext } from "../context/calcContext";

const Display = () => {
  const { input, result } = useContext(CalcContext);

  return (
    <div id="display">
      <p id="d-1">{input}</p>
      <p id="d-2">{result ? result : "0"}</p>
    </div>
  );
};

export default Display;
