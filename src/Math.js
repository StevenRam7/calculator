import { useState, useContext } from "react";
import { Context } from "./App";

function Math() {
//add functionality & classes to buttons
const { setSelection } = useContext(Context);
const [display1, setDisplay1] = useState(null)

    return (
        <div className="main">
            <div className="display">
                display
            </div>
            <div className="row1">
                <button>CLEAR</button>
                <button>÷</button>
            </div>
           <div className="row2"></div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>X</button>
            <div className="row3">
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
            </div>
            <div className="row4">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>+</button>
            </div>
            <div className="row5"></div>
                <button>0</button>
                <button>.</button>
                <button>=</button>
        </div>
    );
}

export default Math;