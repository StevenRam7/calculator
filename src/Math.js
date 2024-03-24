import { useState, useContext } from "react";
import { Context } from "./App";

function Math() {

const { selection, setSelection } = useContext(Context);
const [firstNum, setFirstNum] = useState(null)
const [secondNum, setSecondNum] = useState(null)
const [operator, setOperator] = useState(null)
const [result, setResult] = useState(null)

function handleNumClick(num) {
    let finalNum = null;
    if (firstNum && operator && secondNum) {
        //for adding digits to second num
        finalNum = secondNum.toString() + num.toString()
        setSecondNum(parseInt(finalNum.substring(0,8)))
        //console.log("yy is " + secondNum)
    }
    if (firstNum && operator && secondNum === null) {
        //starts the second num
        setSecondNum(num)
    }
    if (firstNum && operator === null) {
        //for adding digits to first num
        finalNum = firstNum.toString() + num.toString()
        setFirstNum(parseInt(finalNum.substring(0,8)))
        //console.log("xx is " + firstNum)
    }
    if (firstNum === null && operator === null) {
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
        const total = firstNum/secondNum
        setResult(total.toPrecision(5))
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
                <button className="operator" class="btn btn-secondary" onClick={() => handleClear()}>CLEAR</button>
                <button className="operator" class="btn btn-secondary" onClick={() => handleOpClick("/")}>÷</button>
            </div>
           <div className="row2"></div>
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(1)}>1</button>
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(2)}>2</button>
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(3)}>3</button>
                <button className="operator" class="btn btn-secondary" onClick={() => handleOpClick("*")}>X</button>
            <div className="row3">
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(4)}>4</button>
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(5)}>5</button>
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(6)}>6</button>
                <button className="operator" class="btn btn-secondary" onClick={() => handleOpClick("-")}>-</button>
            </div>
            <div className="row4">
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(7)}>7</button>
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(8)}>8</button>
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(9)}>9</button>
                <button className="operator" class="btn btn-secondary" onClick={() => handleOpClick("+")}>+</button>
            </div>
            <div className="row5"></div>
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(0)}>0</button>
                <button className="operator" class="btn btn-secondary" onClick={() => handleOpClick(".")}>.</button>
                <button className="operator" class="btn btn-secondary" onClick={() => performOp("=")}>=</button>
        </div>
    );
}

export default Math;