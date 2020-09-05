import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {
            status: "",
            price: 0,
            label: ""
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/v1/cpus/2", {
            method: "GET",
        }).then(response => response.json()).then(response => {
            this.setState({
                ...response.result
            })
        })
    }

    handleFormSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        fetch("http://localhost:8080/v1/cpus/2", {
            method: "PUT",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(response => {
            console.log(response);
        })
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        console.log('render', this.state)
        return (
            <div className="container">
                <h1 className={"mt-3"}>Edit CPU Entry 2</h1>
                <div className="d-flex flex-column justify-content-center">
                    <div className={"row"}>
                        <div className={"col-lg-12"}>
                            <form onSubmit={this.handleFormSubmit}>
                                <div className={"form-group"}>
                                    <label className="form-label">Label</label>
                                    <input type="text" name="label" value={this.state.label} className="form-control" onInput={this.handleInputChange}/>
                                </div>
                                <div className={"form-group"}>
                                    <label className="form-label">Status</label>
                                    <select className="form-control" value={this.state.status} name="status" onChange={this.handleInputChange}>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>

                                <div className={"form-group"}>
                                    <label className="form-label">Price</label>
                                    <input type="text" name="price" value={this.state.price} className="form-control" onChange={this.handleInputChange}/>
                                </div>


                                <button type={"submit"} className="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        )
    }

}