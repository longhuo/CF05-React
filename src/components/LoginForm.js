import React from 'react';
import {isEmpty} from "../helper";
import Input from "./Input";

export default class Form extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {
            formValue: {
                username: "",
                password: "",
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
                serverFeedback: "",
                errors: {}
            }, () => {
                fetch("http://localhost:8080/v1/login", {
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
                        });
                    }
                    else{
                        this.setState({
                            submitting: false,
                            serverFeedback: response.message
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
        const {username = "", password = ""} = values;
        if(username.trim() == ""){
            errors.username = "username cannot be empty";
        }
        if(password.trim() == ""){
            errors.password = "password cannot be empty";
        }
        if(password.trim() != "" && password.trim().length < 5){
            errors.password = "password format invalid";
        }
        return errors;
    }

    handleInputChange = (e) => {
        console.log("changed")

        this.setState({
            formValue: {
                ...this.state.formValue,
                [e.target.name] : e.target.value
            },
        }, () => {
            this.setState({
                errors: this.validate(this.state.formValue)
            })
        })
    }

    render() {
        const {username, password} = this.state.formValue;
        const errors = this.state.errors;
        return (
            <div className="container">
                <h1 className={"mt-3"}>Login Form</h1>
                <div className="d-flex flex-column justify-content-center">
                    <div className={"row"}>
                        <div className={"col-lg-12"}>
                            <form onSubmit={this.handleFormSubmit}>
                                {this.state.serverFeedback && <h3 className={"text-danger"}>{this.state.serverFeedback}</h3>}
                                <Input
                                    name={"username"}
                                    label={"Username"}
                                    errors={errors}
                                    value={username}
                                    onChange={this.handleInputChange}
                                />
                                <Input
                                    name={"password"}
                                    label={"Password"}
                                    errors={errors}
                                    value={password}
                                    onChange={this.handleInputChange}
                                />
                                <button type={"submit"} disabled={this.state.submitting} className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        )
    }

}