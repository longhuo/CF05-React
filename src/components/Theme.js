import React, {Component} from 'react';
import Counter from "./CounterWithPropsWithCallback";
import './styles.css'

class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark-mode'
        }
    }

    render() {
        return (<div className="container h-50">
                <div className={this.state.theme}>

                    <div className="d-flex">
                        <h2 className={"w-100"}>Toggle Dark/Light Mode</h2>
                        <p className={"w-100"}>Click the button to toggle between dark and light mode for this page.</p>

                    </div>
                    <button onClick={(e) => {
                        this.setState({
                            theme: this.state.theme === 'dark-mode' ? 'light-mode' : 'dark-mode'
                        })
                    }}>Toggle
                    </button>
                </div>
            </div>
        );
    }
}

export default Theme;