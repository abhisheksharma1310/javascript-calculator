import { createContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SETINPUT":
      return { ...state, input: action.payload };
    case "SETRESULT":
      return { ...state, result: action.payload };
    default:
      return state;
  }
};

export const CalcContext = createContext(null);

const CalcProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    input: "",
    calculate: "",
    result: ""
  });

  const { input, calculate, result } = state;

  const handleInput = (value) => {
    dispatch({ type: "SETINPUT", payload: value });
  };

  const handleResult = (value) => {
    dispatch({ type: "SETRESULT", payload: value });
  };

  return (
    <CalcContext.Provider
      value={{
        input,
        result,
        handleInput,
        handleResult
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
