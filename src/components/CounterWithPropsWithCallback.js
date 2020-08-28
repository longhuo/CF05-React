import React from "react";

export default class Counter extends React.PureComponent{
    constructor(props) {
        super(props);
        console.log(props);
    }

    handleClick = (e) => {
        this.props.handleScoreIncrease(1);
    }

    render() {
        console.log("render " + this.props.label)
        return (
            <div className={"card"}>
                <div className={"card-body"}>
                    <h1>{this.props.label}</h1>
                    <h2>{this.props.score}</h2>
                    <button className={"btn btn-primary"} onClick={this.handleClick}>Add 1</button>
                </div>
            </div>
        )
    }

}