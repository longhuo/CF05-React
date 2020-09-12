import React, {Component} from 'react';


class Input extends Component {
    render() {
        const {errors, label, name, value="", onChange} = this.props;
        console.log(value)
        return (
            <div className={"form-group"}>
                <label className="form-label">{label}</label>
                <input type="text" name={name} value={value} className={`form-control ${errors[name] ? "is-invalid" : "is-valid"}`} onChange={onChange}/>
                {errors[name] && <div className="invalid-feedback">
                    {errors[name]}
                </div>}
            </div>
        );
    }
}



export default Input;