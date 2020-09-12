import React from 'react';
import {isEmpty} from "../helper";
import Input from "../components/Input";
import {withRouter} from "react-router-dom";

class Form extends React.Component {
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


    handleFormSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        const errors = this.validate(this.state.formValue);
        if(isEmpty(errors)){
            this.setState({
                submitting: true,
                errors: {}
            }, () => {
                fetch("http://localhost:8080/v1/cpus", {
                    method: "POST",
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
                        }, () => {
                            this.props.history.push(`/cpus/${response.result.id}/edit`)
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
        console.log("changed")
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
                <h1 className={"mt-3"}>Create New CPU</h1>
                <div className="d-flex flex-column justify-content-center">
                    <div className={"row"}>
                        <div className={"col-lg-12"}>
                            <form onSubmit={this.handleFormSubmit}>
                                {this.state.serverFeedback && <h3 className={"text-danger"}>{this.state.serverFeedback}</h3>}
                                <Input
                                    name={"label"}
                                    label={"Label"}
                                    errors={errors}
                                    value={label}
                                    onChange={this.handleInputChange}
                                />
                                <Input
                                    name={"price"}
                                    label={"Price"}
                                    errors={errors}
                                    value={price}
                                    onChange={this.handleInputChange}
                                />
                                <button type={"submit"} disabled={this.state.submitting} className="btn btn-primary">Add</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        )
    }

}

export default withRouter(Form);