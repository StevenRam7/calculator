import { useState, useContext } from "react";
import { Context } from "./App";

function Math() {
//add functionality & classes to buttons
const { selection, setSelection } = useContext(Context);
const [firstNum, setFirstNum] = useState(null)
const [secondNum, setSecondNum] = useState(null)
const [operator, setOperator] = useState(null)
function handleClick(num) {
    console.log(num)
    setFirstNum(num)
    console.log("selection = " + selection)
}

    return (
        <div className="main">
            <div className="display">
                {firstNum}
            </div>
            <div className="row1">
                <button className="operator" onClick={() => handleClick()}>CLEAR</button>
                <button className="operator" onClick={() => handleClick("/")}>÷</button>
            </div>
           <div className="row2"></div>
                <button className="number" onClick={() => handleClick(1)}>1</button>
                <button className="number" onClick={() => handleClick(2)}>2</button>
                <button className="number" onClick={() => handleClick(3)}>3</button>
                <button className="operator" onClick={() => handleClick("*")}>X</button>
            <div className="row3">
                <button className="number" onClick={() => handleClick(4)}>4</button>
                <button className="number" onClick={() => handleClick(5)}>5</button>
                <button className="number" onClick={() => handleClick(6)}>6</button>
                <button className="operator" onClick={() => handleClick("-")}>-</button>
            </div>
            <div className="row4">
                <button className="number" onClick={() => handleClick(7)}>7</button>
                <button className="number" onClick={() => handleClick(8)}>8</button>
                <button className="number" onClick={() => handleClick(9)}>9</button>
                <button className="operator" onClick={() => handleClick("+")}>+</button>
            </div>
            <div className="row5"></div>
                <button className="number" onClick={() => handleClick(0)}>0</button>
                <button className="operator" onClick={() => handleClick(".")}>.</button>
                <button className="operator" onClick={() => handleClick("=")}>=</button>
        </div>
    );
}

export default Math;