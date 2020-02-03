import { DEF_THEME, SET_THEME_COLOR, SET_THEME_MODE, ADMIN_LOGOUT, DEF_ADMIN, USER_LOGOUT } from "../constants";

export default (state=DEF_THEME, action) => {
    switch(action.type) {
        case SET_THEME_MODE:
            return {...state, isDark: !state.isDark}
        case SET_THEME_COLOR:
            return {...state, color: action.color}
        case ADMIN_LOGOUT:
            return DEF_THEME
        case USER_LOGOUT:
            return DEF_THEME
        default:
            return state
    }
}