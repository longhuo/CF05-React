import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score : props.score
        }
        console.log(props);
    }

    handleClick = (e) => {
        this.setState({
            score: this.state.score + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.score}</h2>
                <button onClick={this.handleClick}>Add 1</button>
            </div>
        )
    }

}