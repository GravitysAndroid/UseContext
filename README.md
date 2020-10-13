# UseContext

useContext()
The useContext() hook accepts a context object, i.e the value that is returned from React.createContext, and then it returns the current context value for that context.

This hook gives functional components easy access to your React app context. Before the useContext hook was introduced you would need to set up a contextType or a <Consumer> to access your global state passed down from some provider in a class component.

Basically, the useContext hook works with the React Context API which is a way to share data deeply throughout your app without the need to manually pass your app props down through various levels. Now, the useContext() makes using Context a little easier.

The code snippets below will show how the Context API works and how the useContext Hook makes it better.

The Normal Way To Use The Context API
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
  return (
    <NumberContext.Consumer>
      {value => <div>The answer to the question is {value}.</div>}
    </NumberContext.Consumer>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
Copy
Let’s now break down the code snippet and explain each concept.

Below, we are creating a context called NumberContext. It is meant to return an object with two values: { Provider, Consumer }.

const NumberContext = React.createContext();
Copy
Then we use the Provider value that was returned from the NumberContext we created to make a particular value available to all the children.

function App() {
  return (
    <NumberContext.Provider value={45}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}
Copy
With that, we can use the Consumer value that was returned from the NumberContext we created to get the value we made available to all children. If you have noticed, this component did not get any props.

function Display() {
  return (
    <NumberContext.Consumer>
      {value => <div>The answer to the question is {value}.</div>}
    </NumberContext.Consumer>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));

Copy
Note how we were able to get the value from the App component into the Display component by wrapping our content in a NumberContext.Consumer and using the render props method to retrieve the value and render it.

Everything works well and the render props method we used is a really good pattern for handling dynamic data, but in the long run, it does introduce some unnecessary nesting and confusion if you’re not used to it.

Using The useContext Method
To explain the useContext method we will rewrite the Display component using the useContext hook.

// import useContext (or we could write React.useContext)
import React, { useContext } from 'react';

// old code goes here

function Display() {
  const value = useContext(NumberContext);
  return <div>The answer is {value}.</div>;
}
Copy
That’s all we need to do in order to display our value. Pretty neat, right? You call the useContext() hook and pass in the context object we created and we grab the value from it.

Note: Don’t forget that the argument that is passed to the useContext hook must be the context object itself and any component calling the useContext will always re-render when the context value changes.