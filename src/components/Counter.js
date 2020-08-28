import React, {Component} from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    handleClick = (e) => {
        this.setState({
            count : this.state.count + 1
        })
        //this.state.counter = 1;
    }

    render(){
        return (
            <div>
                <h1>Count is {this.state.count}</h1>
                <button onClick={this.handleClick}>Add 1</button>
            </div>
        )
    }
}

export default Counter;