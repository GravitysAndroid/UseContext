# UseContext

useContext()
The useContext() hook accepts a context object, i.e the value that is returned from React.createContext, and then it returns the current context value for that context.

This hook gives functional components easy access to your React app context.

Basically, the useContext hook works with the React Context API which is a way to share data deeply throughout your app without the need to manually pass your app props down through various levels. Now, the useContext() makes using Context a little easier.




import React, { useContext } from 'react';
import './App.css';
import ReactDOM from "react-dom";

const NumberContext = React.createContext();
function App() {
  return (
    <NumberContext.Provider value={60}>
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
