import React from 'react';
import {ThemeContext} from './MyContext';

class MyButton extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({theme, toggleTheme}) => (
                    <button
                        onClick={toggleTheme}
                        style={{backgroundColor: theme.background, color: theme.foreground}}>
                        Toggle Theme
                    </button>
                )}
            </ThemeContext.Consumer>
        );
    }
}
MyButton.contextType = ThemeContext;

export default MyButton;