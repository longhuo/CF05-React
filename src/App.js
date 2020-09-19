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
//import Form from "./components/FormWithSharedComponent"
import CPUEditForm from "./RouterDemo/FormWithSharedComponent"
import NewForm from "./RouterDemo/NewFormWithSharedComponent"
import Form from "./components/LoginForm";
import Jsx from "./components/JSX";
import {connect} from 'react-redux'
import List from "./RouterDemo/List"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

} from "react-router-dom";
import {changeTheme} from "./StateManagement/redux/store";
import ThemeChangeDemo from "./StateManagement/redux/ThemeChangeDemo";
import ContextExample from "./StateManagement/states/ContextExample";


function App() {
    //
    console.log("123")
  return (
    <div className="jumbotron d-flex align-items-center min-vh-100 ">
      <ContextExample/>
    </div>
  );
}

export default App;


function App2(props){
    const {themes, theme} = props;
    return (
        <ThemeChangeDemo/>
        /*<Router>
            <div className={"flex-column"}>
                <Link to="/">Home</Link>{' | '}
                <Link to="/cpus/2/edit">CPU ID 2</Link>{' | '}
                <Link to="/cpus/add">Add New CPUS</Link>{' | '}
            </div>
            <div   style={{backgroundColor: themes[theme].background, color: themes[theme].foreground}}>
            <Switch>
                <Route path="/" exact>
                    <List/>
                </Route>
                <Route path="/cpus/:id/edit" >

                </Route>
                <Route path="/cpus/add" >
                    <NewForm/>
                </Route>
            </Switch>
            </div>
        </Router>*/
    )
}



const mapStateToProps = (state, ownProps) => ({
    theme: state.config.theme,
    themes: state.config.themes,
})

const mapDispatchToProps = {
    changeTheme
}

/*export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App2)*/


/*
export default App2;*/
