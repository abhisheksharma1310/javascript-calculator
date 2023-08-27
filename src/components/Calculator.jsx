import CalcProvider from "../context/calcContext";
import Display from "./Display";
import KeyPad from "./KeyPad";

const Calculator = () => {
  return (
    <div className="calculator">
      <CalcProvider>
        <Display />
        <KeyPad />
      </CalcProvider>
    </div>
  );
};

export default Calculator;
