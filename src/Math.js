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
    let finalNum = null;
    if (firstNum && operator && secondNum) {
        //for adding digits to second num
    }
    if (firstNum && operator) {
        //starts the second num
        setSecondNum(num)
    }
    if (firstNum && operator === null) {
        //for adding digits to first num
    }
    else {
        //starts the first num
        setFirstNum(num) 
    } 
    }

function handleOpClick(op) {
    console.log("op = " + op)
    setOperator(op)
}

function performOp() {
    console.log("operator is " + operator)
    if (operator === "/") {
        //should limit sig figs on result
        const total = firstNum/secondNum
        setResult(total)
    }
    if (operator === "*") {
        const total = firstNum * secondNum
        setResult(total)
        console.log(total)
        console.log("Result is " + result)
    }
    if (operator === "+") {
        const total = firstNum+secondNum
        setResult(total)
    }
    if (operator === "-") {
        const total = firstNum-secondNum
        setResult(total)
    }
    //else {
    //    console.log(operator)
    //    setResult(100)
    //}
    //console.log("Result is " + result)
    setFirstNum(null)
    setSecondNum(null)
    setOperator(null)
}

function handleClear() {
    setFirstNum(null)
    setSecondNum(null)
    setOperator(null)
    setResult(null)
}

    return (
        <div className="main">
            <div className="display">
                {firstNum} {operator} {secondNum} {result}
            </div>
            <div className="row1">
                <button className="operator" onClick={() => handleClear()}>CLEAR</button>
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