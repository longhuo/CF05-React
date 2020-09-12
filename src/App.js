import React from 'react';
import Counter from "./components/Counter";
import Counter1 from "./components/CounterWithProps";
import Score from "./components/Score";
import './App.css';
import Table from "./components/List";
import Theme from "./components/Theme";
import Images from "./components/Image";
//import Form from "./components/Form";
//import Form from "./components/FormWithValidation";
import Form from "./components/FormWithSharedComponent"
import Jsx from "./components/JSX";
function App() {
    //
    console.log("123")
  return (
    <div className="jumbotron d-flex align-items-center min-vh-100">
      <Form/>

    </div>
  );
}

export default App;
