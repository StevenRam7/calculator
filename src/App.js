import './App.css';
//import { Route, Routes } from "react-router-dom";
import Math from './Math';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>
          Calculator
        </h1>
        <body>
         <div>
           <Math />
         </div>
        </body>
      </header>
    </div>
  );
}

export default App;
