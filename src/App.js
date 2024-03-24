import './App.css';
import Math from './Math';
import React from "react";

export const Context = React.createContext({
  selection: null,
  setSelection: () => {},
});

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
