import { DEF_THEME, SET_THEME_COLOR, SET_THEME_MODE } from "../constants";

export default (state=DEF_THEME, action) => {
    switch(action.type) {
        case SET_THEME_MODE:
            return {...state, isDark: !state.isDark}
        case SET_THEME_COLOR:
            return {...state, color: action.color}
        default:
            return state
    }
}