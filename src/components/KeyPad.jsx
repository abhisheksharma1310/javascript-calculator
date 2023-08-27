import { useContext, useState } from "react";
import buttons from "../constants/buttons";
import { CalcContext } from "../context/calcContext";

const calculateResult = (value) => {
  let res = "";
  let err = false;
  try {
    if (value) {
      if (eval(value)) {
        res = eval(value);
      }
    }
  } catch (error) {
    err = true;
  }
  return err ? "Error" : res;
};

const KeyPad = () => {
  const { input, handleInput, result, handleResult } = useContext(CalcContext);

  const [evaluate, setEvaluate] = useState(false);

  const handleButton = (button) => {
    if (button[0] === "clear") {
      handleInput("");
      handleResult("");
    } else if (button[0] !== "equals") {
      let value = input;
      value += button[1];
      if (evaluate && isNaN(button[1])) {
        handleInput(result + button[1]);
        setEvaluate(false);
      } else if (evaluate && !isNaN(button[1])) {
        handleInput(button[1]);
        setEvaluate(false);
      } else {
        const str = input;
        const lastChar = str.charAt(str.length - 1);
        if (isNaN(lastChar) && (button[1] === "*" || button[1] === "/")) {
          const str1 = str.slice(0, -1);
          handleInput(str1 + button[1]);
        } else {
          handleInput(value);
        }
      }
    } else if (button[0] === "equals") {
      const str = input;
      if (isNaN(str.charAt(str.length - 1))) {
        const str1 = str.slice(0, -1);
        const result = calculateResult(str1);
        handleResult(result);
      } else {
        const result = calculateResult(input);
        handleResult(result);
      }
      setEvaluate(true);
    }
  };

  return (
    <div className="key-pad">
      {buttons.map((button) => {
        return (
          <div
            key={button[0]}
            id={button[0]}
            onClick={() => handleButton(button)}
          >
            {button[1]}
          </div>
        );
      })}
    </div>
  );
};

export default KeyPad;
