import React from 'react';
import Counter from "./components/Counter";
import Counter1 from "./components/CounterWithProps";
import Score from "./components/Score";
import './App.css';
import Table from "./components/List";


function App() {
    console.log("123")
  return (
    <div className="jumbotron d-flex align-items-center min-vh-100">
      <Counter1 label={"test"} score={0}/>
      <Counter1 label={"test2"} score={0}/>

    </div>
  );
}

export default App;
