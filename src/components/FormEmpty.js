import React from 'react';

export default class CPUForm extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {

        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    handleInputChange = (e) => {

    }

    render() {
         return (
            <div className="container">
                <h1 className={"mt-3"}>Edit CPU Entry 2</h1>
                <div className="d-flex justify-content-center">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className={"form-group"}>
                            <label className="form-label">Label</label>
                            <input type="text" name="label" value="" className="form-control"/>

                        </div>

                        <div className={"form-group"}>
                            <label className="form-label">Status</label>
                            <select className="form-control" name="status" value="" >
                                <option value="Active">Active</option>
                                <option value="Active">Inactive</option>
                            </select>
                        </div>

                        <div className={"form-group"}>
                            <label className="form-label">Core Count</label>
                            <select className="form-control" value="" name="core" >
                                <option value="2">2</option>
                                <option value="4">4</option>
                                <option value="6">6</option>
                                <option value="8">8</option>
                            </select>
                        </div>

                        <div className={"form-group"}>
                            <label className="form-label">Speed</label>
                            <input type="text" name="speed" value="" className="form-control" />
                        </div>

                        <div className={"form-group"}>
                            <label className="form-label">Price</label>
                            <input type="text" name="price" value="" className="form-control" onChange=""/>
                        </div>
                        <button type={"submit"} className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>

        )
    }

}