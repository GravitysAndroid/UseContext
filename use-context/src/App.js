import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import React from "react";
import ReactDOM from "react-dom";

const NumberContext = React.createContext();
function App() {
  return (
    <NumberContext.Provider value={45}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}

function Display() {
  const value = useContext(NumberContext);
  return <div>The answer is {value}.</div>;
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
