import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/v1/cpus")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.result
                });
            });
    }

    renderRows() {
        return this.state.data.map(todo => {
            return (
                <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.label}</td>
                    <td>{todo.price}</td>
                    {/*<td><a href={"#"} onClick={(e) => {
                        this.props.history.push(`/cpus/${todo.id}/edit`)
                    }}>Edit</a></td>*/}
                    <td>
                        <Link to={`/cpus/${todo.id}/edit`}>Edit</Link> |
                        <a href={"#"} onClick={(e) => {
                            // eslint-disable-next-line no-restricted-globals
                            if(confirm("Please confirm you want to delete this record" + todo.id)){
                                console.log("process delete");
                            }
                            else{
                                //cancel action
                            }
                        }}>Delete</a>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th className="">Id</th>
                        <th className="">Label</th>
                        <th className="">Price</th>
                        <th className="">Action</th>
                    </tr>
                </thead>
                <tbody id="example-body">
                    {this.state.data.length > 0 && this.renderRows()}
                </tbody>
            </table>
        )
    }
}

export default withRouter(Table);