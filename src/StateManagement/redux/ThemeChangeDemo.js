import React, {Component} from 'react';
import {connect} from 'react-redux'
import {changeTheme} from './store';

class ThemeChangeDemo extends Component {

    render() {
        return (
            <div>
                <Context/>
            </div>
        );
    }
}

function Context(props){
    return <div>
        <ConnectedButton/>
    </div>
}


function MyButton(props) {
    console.log(props)
    const theme = props.themes[props.theme]
    return <button
        onClick={props.changeTheme}
        style={{backgroundColor: theme.background, color: theme.foreground}}>
        Current Theme : {props.theme}
    </button>
}


const mapStateToProps = (state, ownProps) => ({
    theme: state.config.theme,
    themes: state.config.themes
})

const mapDispatchToProps = {
    changeTheme
}

const ConnectedButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyButton)


export default ThemeChangeDemo;