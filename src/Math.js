import { useState } from "react";

function Math() {

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
    }
    if (firstNum && operator && secondNum === null) {
        //starts the second num
        setSecondNum(num)
    }
    if (firstNum && operator === null) {
        //for adding digits to first num
        finalNum = firstNum.toString() + num.toString()
        setFirstNum(parseInt(finalNum.substring(0,8)))
    }
    if (firstNum === null && operator === null) {
        //starts the first num
        setFirstNum(num)
    }
}

function handleOpClick(op) {
    setOperator(op)
}

function performOp() {
    if (operator === "/") {
        const total = firstNum/secondNum
        setResult(total.toPrecision(5))
    }
    if (operator === "*") {
        const total = firstNum * secondNum
        setResult(total)
    }
    if (operator === "+") {
        const total = firstNum+secondNum
        setResult(total)
    }
    if (operator === "-") {
        const total = firstNum-secondNum
        setResult(total)
    }
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
                <button className="operator" class="btn btn-primary" onClick={() => handleOpClick("*")}>X</button>
                <button className="operator" class="btn btn-primary" onClick={() => handleOpClick("/")}>÷</button>
                <button className="operator" class="btn btn-primary" onClick={() => handleOpClick("-")}>-</button>
                <button className="operator" class="btn btn-primary" onClick={() => handleOpClick("+")}>+</button>
            </div>
           <div className="row2"></div>
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(1)}>1</button>
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(2)}>2</button>
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(3)}>3</button>
            <div className="row3">
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(4)}>4</button>
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(5)}>5</button>
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(6)}>6</button>
            </div>
            <div className="row4">
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(7)}>7</button>
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(8)}>8</button>
                <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(9)}>9</button>
            </div>
            <div className="row5">
            <button className="number" class="btn btn-secondary" onClick={() => handleNumClick(0)}>0</button>
                <button className="decimal" class="btn btn-info" onClick={() => handleOpClick(".")}>.</button>
                <button className="operator" class="btn btn-primary" onClick={() => performOp("=")}>=</button>
            </div>
            <div className="row6">
                <button className="operator" class="btn btn-success btn-lg" onClick={() => handleClear()}>CLEAR</button>
            </div>
        </div>
    );
}

export default Math;