import React, {Component} from 'react';

class Jsx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {
                id:  5,
                topic: "buy frame tofu x 2",
                completed: false
            },
            partyMember: ['John', 'Jane', 'Jamie'],
            loading: false,
        }
    }
    render() {
        if(this.state.loading){
            return "loading...";
        }
        return (
            <div className={"w-100"}>
                <div>
                    <p>Todo: {this.state.todo.id}</p>
                    <p>topic: {this.state.todo.topic}</p>
                    <p>Completed: {this.state.completed ? "Completed" : "not completed"} </p>
                    {!this.state.completed && <button className={"btn btn-primary"}>Checkout</button>}
                </div>
                <hr/>
                <div>
                    {/*why it can display array*/}
                    {this.state.partyMember}
                </div>
            </div>
        );
    }
}

export default Jsx;