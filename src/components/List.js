import React, { Component } from 'react';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=100")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data
                });
            });
    }

    renderRows() {
        return this.state.data.map(todo => {
            return (
                <tr>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed ? "Completed" : "not Completed"}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <table className="table" cellspacing="0" id="example">
                <thead>
                <tr>
                    <th className="">Id</th>
                    <th className="">Title</th>
                    <th className="">Completed</th>
                </tr>
                </thead>
                <tbody id="example-body">
                {this.state.data.length && this.renderRows()}
                </tbody>
            </table>
        )
    }
}