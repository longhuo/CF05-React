import React from 'react';
import {isEmpty} from "../helper";

export default class Form extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {
            formValue: {
                status: "",
                price: 0,
                label: ""
            },
            submitting: false,
            errors: {},
            serverFeedback: ""
        }

    }

    componentDidMount() {
        fetch("http://localhost:8080/v1/cpus/2", {
            method: "GET",
        }).then(response => response.json()).then(response => {
            this.setState({
                ...this.state,
                formValue: {
                    ...response.result
                }
            })
        })
    }

    handleFormSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        const errors = this.validate(this.state.formValue);
        if(isEmpty(errors)){
            this.setState({
                submitting: true,
                errors: {}
            }, () => {
                fetch("http://localhost:8080/v1/cpus/2", {
                    method: "PUT",
                    body: JSON.stringify(this.state.formValue),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(response => response.json()).then(response => {
                    if(response.result){
                        this.setState({
                            serverFeedback: response.result.message,
                            submitting: false,
                            formValue: {
                                ...response.result
                            }
                        });
                    }
                    else{
                        this.setState({
                            submitting: false,
                            serverFeedback: response.result.message
                        });
                    }
                })
            })
        }
        else{
            this.setState({
                submitting: false,
                serverFeedback: "",
                errors: errors
            });
        }
    }

    validate = (values) => {
        const errors = {};
        const {label = "", price = ""} = values;
        if(label.trim() == ""){
            errors.label = "label cannot be empty";
        }
        if(Number.isNaN(price*1) || price*1  <= 0 ){
            errors.price = "price must be a positive number";
        }
        console.log(price*1);
        console.log(errors);
        return errors;
    }

    handleInputChange = (e) => {
        this.setState({
            formValue: {
                ...this.state.formValue,
                [e.target.name] : e.target.value
            }

        })
    }

    render() {
        const {label, status, price} = this.state.formValue;
        const errors = this.state.errors;
        return (
            <div className="container">
                <h1 className={"mt-3"}>Edit CPU Entry 2</h1>
                <div className="d-flex flex-column justify-content-center">
                    <div className={"row"}>
                        <div className={"col-lg-12"}>
                            <form onSubmit={this.handleFormSubmit}>
                                {this.state.serverFeedback && <h3 className={"text-danger"}>{this.state.serverFeedback}</h3>}
                                <div className={"form-group"}>
                                    <label className="form-label">Label</label>
                                    <input type="text" name="label" value={label} className={`form-control ${errors?.label ? "is-invalid" : "is-valid"}`} onInput={this.handleInputChange}/>
                                    {errors.label && <div className="invalid-feedback">
                                        {errors.label}
                                    </div>}
                                </div>
                                <div className={"form-group"}>
                                    <label className="form-label">Price</label>
                                    <input type="text" name="price" value={price} className={`form-control ${errors?.price ? "is-invalid" : "is-valid"}`} onChange={this.handleInputChange}/>
                                    {errors.price && <div className="invalid-feedback">
                                        {errors.price}
                                    </div>}
                                </div>
                                <button type={"submit"} disabled={this.state.submitting} className="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        )
    }

}