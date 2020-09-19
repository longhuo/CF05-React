import {createStore} from 'redux';
import {combineReducers} from "redux";

const themeConfig = {
    theme: 'dark',
    themes: {
        light: {
            foreground: '#000000',
            background: '#eeeeee',
        },
        dark: {
            foreground: '#ffffff',
            background: '#222222',
        },
    }
}

function themeChangeReducer(state = themeConfig, action){
    if(action.type == 'CHANGE'){
        return {
            ...state,
            theme: state.theme == 'dark' ? 'light' : 'dark',
        }
    }
    else{
        return state;
    }
}

export const changeTheme = () => ({
    type: 'CHANGE',
    payload: {}
})

export default createStore(combineReducers({
    config: themeChangeReducer
}));