import React, {Component} from 'react';
import {ThemeContext, themes} from './MyContext';
import MyButton from './MyButton';


class Content extends React.PureComponent {
    render() {
        console.log("here")
        return <div>
            <MyButton/>
        </div>
    }
}

class ContextExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: themes.light,

        };
    }

    toggleTheme = () => {
        this.setState(state => ({
            theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
        }));
    }

    render() {
        // The entire state is passed to the provider
        return (
            <ThemeContext.Provider value={{theme: this.state.theme,  toggleTheme: this.toggleTheme}} >
                <Content/>
            </ThemeContext.Provider>
        );
    }
}

export default ContextExample;