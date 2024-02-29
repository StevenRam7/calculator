import { useState, useContext } from "react";
import { Context } from "./App";

function Math() {

const { selection, setSelection } = useContext(Context);
const [firstNum, setFirstNum] = useState(null)
const [secondNum, setSecondNum] = useState(null)
const [operator, setOperator] = useState(null)
const [result, setResult] = useState(null)

function handleNumClick(num) {
    //console.log(num)
    //setFirstNum(num)
    if (firstNum) {
        setSecondNum(num)
    }
        else {
           setFirstNum(num) 
        } 
    }

function handleOpClick(op) {
    //console.log("op = " + op)
    setOperator(op)
}

function performOp() {
    //troubleshoot this function - shows result is null for all ops
    if (operator === "/") {
        setResult(firstNum/secondNum)
    }
    if (operator === "*") {
        console.log(firstNum * secondNum)
        setResult(firstNum * secondNum)
    }
    if (operator === "+") {
        setResult(firstNum+secondNum)
    }
    if (operator === "-") {
        setResult(firstNum-secondNum)
    }
    else {
        setResult(100)
    }
    console.log("Result is " + result)
}

    return (
        <div className="main">
            <div className="display">
                {firstNum} {operator} {secondNum}
            </div>
            <div className="row1">
                <button className="operator" onClick={() => handleOpClick()}>CLEAR</button>
                <button className="operator" onClick={() => handleOpClick("/")}>÷</button>
            </div>
           <div className="row2"></div>
                <button className="number" onClick={() => handleNumClick(1)}>1</button>
                <button className="number" onClick={() => handleNumClick(2)}>2</button>
                <button className="number" onClick={() => handleNumClick(3)}>3</button>
                <button className="operator" onClick={() => handleOpClick("*")}>X</button>
            <div className="row3">
                <button className="number" onClick={() => handleNumClick(4)}>4</button>
                <button className="number" onClick={() => handleNumClick(5)}>5</button>
                <button className="number" onClick={() => handleNumClick(6)}>6</button>
                <button className="operator" onClick={() => handleOpClick("-")}>-</button>
            </div>
            <div className="row4">
                <button className="number" onClick={() => handleNumClick(7)}>7</button>
                <button className="number" onClick={() => handleNumClick(8)}>8</button>
                <button className="number" onClick={() => handleNumClick(9)}>9</button>
                <button className="operator" onClick={() => handleOpClick("+")}>+</button>
            </div>
            <div className="row5"></div>
                <button className="number" onClick={() => handleNumClick(0)}>0</button>
                <button className="operator" onClick={() => handleOpClick(".")}>.</button>
                <button className="operator" onClick={() => performOp("=")}>=</button>
        </div>
    );
}

export default Math;